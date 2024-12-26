# STM32F303RE GPIO Programming Guide

## Table of Contents
1. [Basic GPIO Concepts](#basic-gpio-concepts)
2. [GPIO Configuration](#gpio-configuration)
3. [Bit Manipulation](#bit-manipulation)
4. [HAL Macros](#hal-macros)
5. [Timer Operations](#timer-operations)
6. [Interrupts](#interrupts)

## Basic GPIO Concepts

GPIO (General Purpose Input/Output) pins are the basic interface for interacting with the physical world. Each pin can be:
- Input (reading external signals)
- Output (sending signals)
- Alternate Function (special features like UART, I2C)
- Analog (for ADC/DAC operations)

## GPIO Configuration

### Basic Pin Setup
```c
// Enable GPIO Clock first
__HAL_RCC_GPIOA_CLK_ENABLE();

// Structure for GPIO initialization
GPIO_InitTypeDef GPIO_InitStruct = {0};

// Configure PA5 as output (LED)
GPIO_InitStruct.Pin = GPIO_PIN_5;
GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;    // Push-pull output
GPIO_InitStruct.Pull = GPIO_NOPULL;           // No pull-up/pull-down
GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;  // Low speed sufficient for LED

HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
```

## Bit Manipulation

### Common Bit Operations
```c
// Bit masks
#define PIN_SET(port, pin)    ((port) |= (1U << (pin)))
#define PIN_CLEAR(port, pin)  ((port) &= ~(1U << (pin)))
#define PIN_TOGGLE(port, pin) ((port) ^= (1U << (pin)))
#define PIN_READ(port, pin)   (((port) >> (pin)) & 1U)

// Example usage
PIN_SET(GPIOA->ODR, 5);    // Set PA5 high
PIN_CLEAR(GPIOA->ODR, 5);  // Set PA5 low
PIN_TOGGLE(GPIOA->ODR, 5); // Toggle PA5
uint8_t state = PIN_READ(GPIOA->IDR, 5); // Read PA5
```

## HAL Macros

### Common HAL Operations
```c
// Pin control
HAL_GPIO_WritePin(GPIOA, GPIO_PIN_5, GPIO_PIN_SET);   // Set high
HAL_GPIO_WritePin(GPIOA, GPIO_PIN_5, GPIO_PIN_RESET); // Set low
GPIO_PinState state = HAL_GPIO_ReadPin(GPIOA, GPIO_PIN_5); // Read pin
HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5); // Toggle pin
```

## Timer Operations

### Basic Timer Setup
```c
// Timer initialization example (Timer 2)
void Timer2_Init(void) {
    TIM_HandleTypeDef htim2;
    
    __HAL_RCC_TIM2_CLK_ENABLE();
    
    htim2.Instance = TIM2;
    htim2.Init.Prescaler = 7999; // For 1ms timing (64MHz/8000 = 8000Hz)
    htim2.Init.CounterMode = TIM_COUNTERMODE_UP;
    htim2.Init.Period = 999; // 1000 counts for 1 second
    htim2.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;
    htim2.Init.AutoReloadPreload = TIM_AUTORELOAD_PRELOAD_DISABLE;
    
    HAL_TIM_Base_Init(&htim2);
    HAL_TIM_Base_Start_IT(&htim2);
}
```

## Interrupts

### GPIO Interrupt Setup
```c
void GPIO_Interrupt_Init(void) {
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    
    __HAL_RCC_GPIOC_CLK_ENABLE();
    
    // Configure PC13 (User Button) as interrupt
    GPIO_InitStruct.Pin = GPIO_PIN_13;
    GPIO_InitStruct.Mode = GPIO_MODE_IT_FALLING;
    GPIO_InitStruct.Pull = GPIO_NOPULL;
    
    HAL_GPIO_Init(GPIOC, &GPIO_InitStruct);
    
    // Enable EXTI interrupt
    HAL_NVIC_SetPriority(EXTI15_10_IRQn, 0, 0);
    HAL_NVIC_EnableIRQ(EXTI15_10_IRQn);
}

// Interrupt handler
void EXTI15_10_IRQHandler(void) {
    HAL_GPIO_EXTI_IRQHandler(GPIO_PIN_13);
}

// Callback function
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin) {
    if (GPIO_Pin == GPIO_PIN_13) {
        // Handle button press
        HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
    }
}
```

## Complete Example: Blinking LED with Button Interrupt
```c
#include "stm32f3xx_hal.h"

void SystemClock_Config(void);
void GPIO_Init(void);
void Error_Handler(void);

int main(void) {
    HAL_Init();
    SystemClock_Config();
    
    // Initialize GPIO
    __HAL_RCC_GPIOA_CLK_ENABLE();
    __HAL_RCC_GPIOC_CLK_ENABLE();
    
    // LED configuration (PA5)
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    GPIO_InitStruct.Pin = GPIO_PIN_5;
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
    GPIO_InitStruct.Pull = GPIO_NOPULL;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    // Button configuration (PC13)
    GPIO_InitStruct.Pin = GPIO_PIN_13;
    GPIO_InitStruct.Mode = GPIO_MODE_IT_FALLING;
    GPIO_InitStruct.Pull = GPIO_NOPULL;
    HAL_GPIO_Init(GPIOC, &GPIO_InitStruct);
    
    // Enable interrupt
    HAL_NVIC_SetPriority(EXTI15_10_IRQn, 0, 0);
    HAL_NVIC_EnableIRQ(EXTI15_10_IRQn);
    
    while (1) {
        HAL_Delay(1000);
        HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
    }
}

void SystemClock_Config(void) {
    // Clock configuration code here
    // (Omitted for brevity)
}

void Error_Handler(void) {
    while(1) {
        // Error handling
    }
}
```

## Important Notes

1. Always enable peripheral clocks before configuration
2. Configure GPIO pins before enabling interrupts
3. Use appropriate pull-up/pull-down resistors based on your hardware
4. Handle debouncing for physical buttons
5. Keep interrupt handlers short and fast
6. Use HAL_Delay() only in main loop, not in interrupts

## References
- [STM32F303RE Reference Manual](https://www.st.com/resource/en/reference_manual/dm00043574-stm32f303xb-c-d-e-stm32f303x6-8-stm32f328x8-stm32f358xc-stm32f398xe-advanced-arm-based-mcus-stmicroelectronics.pdf)
- [STM32F3 HAL Documentation](https://www.st.com/resource/en/user_manual/dm00122016-description-of-stm32f1-hal-and-lowlayer-drivers-stmicroelectronics.pdf)
