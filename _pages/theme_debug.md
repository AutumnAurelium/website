---
layout: default
permalink: /theme-debug
---

### home

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc eu nisi.

**Bold text** and *italic text*

> This is a blockquote with some wisdom

1. First item in an ordered list
2. Second item
3. Third item

- Unordered list item 1
- Unordered list item 2
- Unordered list item 3

## Heading 2

### Heading 3

[Link to Google](https://www.google.com)

![Alt text for an image](https://example.com/image.jpg)

[Formidable - Success!!!It appears we're trapped in some kind of Markdown formatting test page.](#portrait-inland-empire)
[This would be a perfect place to get high.](#portrait-electrochemistry)
[Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisi eu tincidunt malesuada, nunc nunc tincidunt urna, eu aliquam nunc nisi id nunc. Sed euismod, nunc sit amet aliquam tincidunt, nunc nunc tincidunt urna, eu aliquam nunc nisi id nunc. Sed euismod, nunc sit amet aliquam tincidunt, nunc nunc tincidunt urna, eu aliquam nunc nisi id nunc. Sed euismod, nunc sit amet aliquam tincidunt, nunc nunc tincidunt urna, eu aliquam nunc nisi id nunc.](#portrait-drama)

Here's a table:

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |

## JavaScript
```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
```

## Python
```python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))
```

## Ruby
```ruby
class Animal
  def speak
    "Some generic animal sound"
  end
end

class Dog < Animal
  def speak
    "Woof!"
  end
end

puts Dog.new.speak
```

## Java
```java
import java.util.ArrayList;
import java.util.List;

public class Lambda {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        numbers.add(5);
        numbers.add(9);
        numbers.add(8);
        numbers.add(1);

        numbers.forEach(n -> System.out.println(n * 2));
    }
}
```

## Rust
```rust
fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n-1) + fibonacci(n-2),
    }
}

fn main() {
    println!("The 10th Fibonacci number is: {}", fibonacci(10));
}
```
