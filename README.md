
# 🧪 Testing con Jasmine

Estas Prácticas  contiene dos ejercicios de lógica implementados con **JavaScript** usando la metodología **TDD (Test Driven Development)** y el framework de pruebas **Jasmine**.

## 🔧 Tecnologías usadas

- HTML5
- JavaScript (ES6)
- Jasmine 3.5 (usando CDN)



## 🧪 Ejercicios realizados

### 1. Verificar si un número es par

#### ✅ Descripción:
Función `esPar` que devuelve `true` si el número es par, o `false` si es impar.

#### 🧪 Tests:
- Verifica que `esPar` sea una función.
- Casos positivos y negativos (números pares, impares y 0).
  
#### 💻 Implementación:

```js
function esPar(numero) {
  return numero % 2 === 0;
}

---

### 2. Calculate the factorial of a number

#### 🔹 Description:
The `factorial` function returns the factorial of a non-negative integer.

#### 🧪 Tests:
- Checks if `factorial` is a function.
- Validates results for 0 through 5.

#### 💻 Implementation:

```js
function factorial(n) {
    if (n === 0) return 1;
  
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  
    return result;
  }
```

---

## 🚀 How to Use

1. Clone or download the project files.
2. Open `index.html` in your browser.
3. The Jasmine tests will run automatically.
4. If everything is correct, all tests will appear green ✅

---

## 📚 Resources

- [Jasmine Documentation](https://jasmine.github.io/)
- The Bridge FullStack Course

---

> 💡 *"That which is acquired with much difficulty is more loved."* – Aristotle
