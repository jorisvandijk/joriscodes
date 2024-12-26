"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2994],{7066:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"programming/ST32-F303RE/GPIO","title":"STM32F303RE GPIO Programming Guide","description":"Table of Contents","source":"@site/docs/programming/ST32-F303RE/GPIO.md","sourceDirName":"programming/ST32-F303RE","slug":"/programming/ST32-F303RE/GPIO","permalink":"/programming/ST32-F303RE/GPIO","draft":false,"unlisted":false,"editUrl":"https://codeberg.org/jorisvandijk/joriscodes/src/branch/main/docs/programming/ST32-F303RE/GPIO.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Programming","permalink":"/category/programming"},"next":{"title":"Check C++ version","permalink":"/programming/cpp-version"}}');var r=i(4848),o=i(8453);const l={},s="STM32F303RE GPIO Programming Guide",a={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Basic GPIO Concepts",id:"basic-gpio-concepts",level:2},{value:"GPIO Configuration",id:"gpio-configuration",level:2},{value:"Basic Pin Setup",id:"basic-pin-setup",level:3},{value:"Bit Manipulation",id:"bit-manipulation",level:2},{value:"Common Bit Operations",id:"common-bit-operations",level:3},{value:"HAL Macros",id:"hal-macros",level:2},{value:"Common HAL Operations",id:"common-hal-operations",level:3},{value:"Timer Operations",id:"timer-operations",level:2},{value:"Basic Timer Setup",id:"basic-timer-setup",level:3},{value:"Interrupts",id:"interrupts",level:2},{value:"GPIO Interrupt Setup",id:"gpio-interrupt-setup",level:3},{value:"Complete Example: Blinking LED with Button Interrupt",id:"complete-example-blinking-led-with-button-interrupt",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"References",id:"references",level:2}];function I(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"stm32f303re-gpio-programming-guide",children:"STM32F303RE GPIO Programming Guide"})}),"\n",(0,r.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#basic-gpio-concepts",children:"Basic GPIO Concepts"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#gpio-configuration",children:"GPIO Configuration"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#bit-manipulation",children:"Bit Manipulation"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#hal-macros",children:"HAL Macros"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#timer-operations",children:"Timer Operations"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#interrupts",children:"Interrupts"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"basic-gpio-concepts",children:"Basic GPIO Concepts"}),"\n",(0,r.jsx)(e.p,{children:"GPIO (General Purpose Input/Output) pins are the basic interface for interacting with the physical world. Each pin can be:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Input (reading external signals)"}),"\n",(0,r.jsx)(e.li,{children:"Output (sending signals)"}),"\n",(0,r.jsx)(e.li,{children:"Alternate Function (special features like UART, I2C)"}),"\n",(0,r.jsx)(e.li,{children:"Analog (for ADC/DAC operations)"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"gpio-configuration",children:"GPIO Configuration"}),"\n",(0,r.jsx)(e.h3,{id:"basic-pin-setup",children:"Basic Pin Setup"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"// Enable GPIO Clock first\n__HAL_RCC_GPIOA_CLK_ENABLE();\n\n// Structure for GPIO initialization\nGPIO_InitTypeDef GPIO_InitStruct = {0};\n\n// Configure PA5 as output (LED)\nGPIO_InitStruct.Pin = GPIO_PIN_5;\nGPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;    // Push-pull output\nGPIO_InitStruct.Pull = GPIO_NOPULL;           // No pull-up/pull-down\nGPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;  // Low speed sufficient for LED\n\nHAL_GPIO_Init(GPIOA, &GPIO_InitStruct);\n"})}),"\n",(0,r.jsx)(e.h2,{id:"bit-manipulation",children:"Bit Manipulation"}),"\n",(0,r.jsx)(e.h3,{id:"common-bit-operations",children:"Common Bit Operations"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"// Bit masks\n#define PIN_SET(port, pin)    ((port) |= (1U << (pin)))\n#define PIN_CLEAR(port, pin)  ((port) &= ~(1U << (pin)))\n#define PIN_TOGGLE(port, pin) ((port) ^= (1U << (pin)))\n#define PIN_READ(port, pin)   (((port) >> (pin)) & 1U)\n\n// Example usage\nPIN_SET(GPIOA->ODR, 5);    // Set PA5 high\nPIN_CLEAR(GPIOA->ODR, 5);  // Set PA5 low\nPIN_TOGGLE(GPIOA->ODR, 5); // Toggle PA5\nuint8_t state = PIN_READ(GPIOA->IDR, 5); // Read PA5\n"})}),"\n",(0,r.jsx)(e.h2,{id:"hal-macros",children:"HAL Macros"}),"\n",(0,r.jsx)(e.h3,{id:"common-hal-operations",children:"Common HAL Operations"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"// Pin control\nHAL_GPIO_WritePin(GPIOA, GPIO_PIN_5, GPIO_PIN_SET);   // Set high\nHAL_GPIO_WritePin(GPIOA, GPIO_PIN_5, GPIO_PIN_RESET); // Set low\nGPIO_PinState state = HAL_GPIO_ReadPin(GPIOA, GPIO_PIN_5); // Read pin\nHAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5); // Toggle pin\n"})}),"\n",(0,r.jsx)(e.h2,{id:"timer-operations",children:"Timer Operations"}),"\n",(0,r.jsx)(e.h3,{id:"basic-timer-setup",children:"Basic Timer Setup"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"// Timer initialization example (Timer 2)\nvoid Timer2_Init(void) {\n    TIM_HandleTypeDef htim2;\n    \n    __HAL_RCC_TIM2_CLK_ENABLE();\n    \n    htim2.Instance = TIM2;\n    htim2.Init.Prescaler = 7999; // For 1ms timing (64MHz/8000 = 8000Hz)\n    htim2.Init.CounterMode = TIM_COUNTERMODE_UP;\n    htim2.Init.Period = 999; // 1000 counts for 1 second\n    htim2.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;\n    htim2.Init.AutoReloadPreload = TIM_AUTORELOAD_PRELOAD_DISABLE;\n    \n    HAL_TIM_Base_Init(&htim2);\n    HAL_TIM_Base_Start_IT(&htim2);\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"interrupts",children:"Interrupts"}),"\n",(0,r.jsx)(e.h3,{id:"gpio-interrupt-setup",children:"GPIO Interrupt Setup"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"void GPIO_Interrupt_Init(void) {\n    GPIO_InitTypeDef GPIO_InitStruct = {0};\n    \n    __HAL_RCC_GPIOC_CLK_ENABLE();\n    \n    // Configure PC13 (User Button) as interrupt\n    GPIO_InitStruct.Pin = GPIO_PIN_13;\n    GPIO_InitStruct.Mode = GPIO_MODE_IT_FALLING;\n    GPIO_InitStruct.Pull = GPIO_NOPULL;\n    \n    HAL_GPIO_Init(GPIOC, &GPIO_InitStruct);\n    \n    // Enable EXTI interrupt\n    HAL_NVIC_SetPriority(EXTI15_10_IRQn, 0, 0);\n    HAL_NVIC_EnableIRQ(EXTI15_10_IRQn);\n}\n\n// Interrupt handler\nvoid EXTI15_10_IRQHandler(void) {\n    HAL_GPIO_EXTI_IRQHandler(GPIO_PIN_13);\n}\n\n// Callback function\nvoid HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin) {\n    if (GPIO_Pin == GPIO_PIN_13) {\n        // Handle button press\n        HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"complete-example-blinking-led-with-button-interrupt",children:"Complete Example: Blinking LED with Button Interrupt"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'#include "stm32f3xx_hal.h"\n\nvoid SystemClock_Config(void);\nvoid GPIO_Init(void);\nvoid Error_Handler(void);\n\nint main(void) {\n    HAL_Init();\n    SystemClock_Config();\n    \n    // Initialize GPIO\n    __HAL_RCC_GPIOA_CLK_ENABLE();\n    __HAL_RCC_GPIOC_CLK_ENABLE();\n    \n    // LED configuration (PA5)\n    GPIO_InitTypeDef GPIO_InitStruct = {0};\n    GPIO_InitStruct.Pin = GPIO_PIN_5;\n    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;\n    GPIO_InitStruct.Pull = GPIO_NOPULL;\n    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;\n    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);\n    \n    // Button configuration (PC13)\n    GPIO_InitStruct.Pin = GPIO_PIN_13;\n    GPIO_InitStruct.Mode = GPIO_MODE_IT_FALLING;\n    GPIO_InitStruct.Pull = GPIO_NOPULL;\n    HAL_GPIO_Init(GPIOC, &GPIO_InitStruct);\n    \n    // Enable interrupt\n    HAL_NVIC_SetPriority(EXTI15_10_IRQn, 0, 0);\n    HAL_NVIC_EnableIRQ(EXTI15_10_IRQn);\n    \n    while (1) {\n        HAL_Delay(1000);\n        HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);\n    }\n}\n\nvoid SystemClock_Config(void) {\n    // Clock configuration code here\n    // (Omitted for brevity)\n}\n\nvoid Error_Handler(void) {\n    while(1) {\n        // Error handling\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Always enable peripheral clocks before configuration"}),"\n",(0,r.jsx)(e.li,{children:"Configure GPIO pins before enabling interrupts"}),"\n",(0,r.jsx)(e.li,{children:"Use appropriate pull-up/pull-down resistors based on your hardware"}),"\n",(0,r.jsx)(e.li,{children:"Handle debouncing for physical buttons"}),"\n",(0,r.jsx)(e.li,{children:"Keep interrupt handlers short and fast"}),"\n",(0,r.jsx)(e.li,{children:"Use HAL_Delay() only in main loop, not in interrupts"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.st.com/resource/en/reference_manual/dm00043574-stm32f303xb-c-d-e-stm32f303x6-8-stm32f328x8-stm32f358xc-stm32f398xe-advanced-arm-based-mcus-stmicroelectronics.pdf",children:"STM32F303RE Reference Manual"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.st.com/resource/en/user_manual/dm00122016-description-of-stm32f1-hal-and-lowlayer-drivers-stmicroelectronics.pdf",children:"STM32F3 HAL Documentation"})}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(I,{...n})}):I(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>s});var t=i(6540);const r={},o=t.createContext(r);function l(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);