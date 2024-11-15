---
tags: [C++, Programming]
---

# Check C++ version
Create a file called `version.cpp` and add the following code:

```cpp showLineNumbers
#include <iostream>

int main() {
    std::cout << __cplusplus << std::endl;
    return 0;
}
```

Compile the code with `g++ version.cpp -o version` and run it with `./version`. This should output the version of the C++ standard that your compiler supports.