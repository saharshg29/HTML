// In this prolem we have to write a sum function which will take varriety of arguments

function sum(...args) {
    if(items.length === 1 && Array.isArray(args[0])) {
        items = [...args[0]]
    }
    return args.reduce((a,b) => a+b)
}

console.log(sum(1,2,3,4,5,6,7,8,9,4,5465,46,165,48,6516,854,51,6548,41654168,4165,41684,6846,34168,46));