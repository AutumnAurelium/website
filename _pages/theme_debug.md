---
layout: default
permalink: /theme-debug
---

### heading 1

This is a modified color scheme and layout for the Whiteglass theme.

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

![A 400 by 400 test image. This is an alt text testing image.](https://placehold.co/300x300)

[Formidable -- Success!!!Don't look now, but it seems that we're in some kind of Markdown formatting test page.](#portrait-inland-empire)
[What? I don't know what that means.](#portrait-harry)
[Trivial -- Success!!!Markdown is a lightweight system for writing formatted documents. It was developed in 2004 by John Gruber, whose most recent endeavor is a failed note-taking app.](#portrait-encyclopedia)
[It *means* that someone is trying to read your thoughts.](#portrait-authority)
[I can't have anyone hearing what goes on in here. Quickly -- think of something normal!](#portrait-harry)
[Trivial -- Failure!!!I know just the thing, my liege: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisi eu tincidunt malesuada, nunc nunc tincidunt urna, eu aliquam nunc nisi id nunc. Sed euismod, nunc sit amet aliquam tincidunt, nunc nunc tincidunt urna, eu aliquam nunc nisi id nunc.](#portrait-drama)


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
