// Unit 5 

// 1.	Покажите операции push(S,4) Push (S,1), Push (S,3), 
// Pop (S), Push (S,8) и Pop (S) на стеке реализованном с помощью массива S[…6]. 
// Первоначально стек пуст


function pushPopAlg (arr = []) {
    arr.push(4,1,3)
    arr.pop()
    arr.push(8)
    arr.pop()

    return arr
}

pushPopAlg()


//push
var stack = []
var bobbler = 0

function add (stack, x) {
    stack[0] = bobbler
    bobbler += 1
    console.log (bobbler)

    stack[bobbler] = x

    return stack
}
add(stack, 4)

//pop

var stack = [1]
var bobbler = 1

function remove(stack) {
    if (bobbler === 0) {
        return "underflow"
    } else {
        bobbler -= 1
        stack[bobbler] = [bobbler + 1]
        return stack
    }
}

remove(stack)

// 2.	Как на базе одного массива А[1…n] реализовать две стека 
// суммарной длины не больше n? Операции Push Pop должны выполняться за время О[1]

function arrToStack (arr = [1,2,3,4]) {
    let arr1 = []
    let arr2 = []

    for (let i = 0; i < arr.length; i =+ 1){
        if ( arr.indexOf(i) % 2 !== 0){
            arr1.push(arr[i])
        }
        else  {
            arr2.push(arr[i])
        }
    }4

    return arr1, arr2
}
arrToStack()

// 3.	Следуя образцу рис 11.2 покажите работу операции Enqueue(Q,4), 
// Enqueue (Q,1), Enqueue (Q,4), Dequeue (Q,1), Enqueue (Q,8) и Dequeue (Q) 
// на очереди реализованной с помощью массива Q(1…5) Первоначально очередь пуста.

function que (arr = [1,2,3,4,5]) {
    arr.push(4)
    arr.push(1)
    arr.push(4)
    arr.shift()
    arr.push(8)
    arr.shift()

    return arr    
}

que()

// 4.	Перепишите процедуры Enqueue и Dequeue, предусмотрев проверку на случаай 
// переполнения или underflow

function queChech (arr = [1,2,3,4,5]){
     
    if (arr.length === 0 ){
        console.log ('Underflow')
    }
    else {
        arr.shift()
    }

    if (arr.length >= 4294967295){
        console.log ('Overload')
    }
    else {
        arr.push(8)
    }

    return arr
}

queChech()

// 5.	Стек позволяет добавлять и удалять элементы только с одного конца. 
// В очередь добавлять элементы можно только с одно конца а удалять – только с другого. 
// Структура данных называется деком (Deque), позволяет добавлять и удалять элементы с обоих концов. 
// Реализуйте дек на базе массива таким образом чтобы операции добавления и удаления элемента с каждого концов занимало время О(1)

function deque (arr = [1,2,3,4]){
    arr.shift()
    arr.unshift(9)
    arr.pop()
    arr.push(9)

    return arr
}

deque()

// 6.	Объясните как можно реализовать очередь на базе двух стеков. 

function twoStacksToQue (arr1 = [1,2,3,4], arr2 = [5,6,7,8]){
    arr = [...arr1, ...arr2]

    arr.push(9)
    arr.shift()

    return arr
}

twoStacksToQue()

// 7.	Объясните, как реализовать стек на базе друх очередей. 

function twoStacksToQue (arr1 = [1,2,3,4], arr2 = [5,6,7,8]){
    arr = [...arr1, ...arr2]

    arr.push(9)
    arr.pop()

    return arr
}

twoStacksToQue()
