# 类 class

### 概念理解

**类：**定义了一件事物的抽象特点，包含它的属性和方法

**对象：**类的实例，通过new 生成

**面向对象（O O P）的三大特征：**封装、继承、多态

**封装：**将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问对象，同时也保证了外界无法任意改变对象内部的数据

**继承：**子类继承父类，子类除了拥有父类的所有特性之外，自身也具备跟具体的特性

**多态：**由继承而产生了相关的不同类，对同一方法可以由有不同的响应。比如 Cat 和 Dog 都继承自Animal，但是分别实现了自己的eat方法。此时针对某一个实例，我们无需了解他是Dog还是Cat，就可以调用eat方法，程序会自动的判断出来应该如何执行eat

**存取器（getter,setter）：**用以改变属性的读取和赋值行为

**修饰符：**修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法

**抽象类：**抽象类是提供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现

**接口：**不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现。一个类只能继承自另一个类，但可以实现多个接口