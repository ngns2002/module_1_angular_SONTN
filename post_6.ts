//post 6
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Calling method '${propertyKey}' with arguments: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method '${propertyKey}' returned: ${result}`);
        return result;
    };

    return descriptor;
}

class MyClass {
    @logMethod
    someMethod(x: number, y: number): number {
        return x + y;
    }
}

const obj = new MyClass();
const sum = obj.someMethod(5, 10);
console.log("Result:", sum);
