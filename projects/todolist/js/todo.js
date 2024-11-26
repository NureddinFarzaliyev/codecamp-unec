const input = document.querySelector('input[type="text"]')
const form = document.querySelector('form')
const taskList = document.querySelector('ul')
const allDone = document.querySelector('.all-done')

const createTask = (content) => {
    const task = document.createElement('li')
    updateStatus()

    task.addEventListener('click', () => {
        task.classList.toggle('task-done')
        updateCount()
    })

    const text = document.createElement('p')
    text.textContent = content;
    const button = document.createElement('button')
    
    button.addEventListener('click', () => {
        removeTask(task, true)
    }, false)

    task.appendChild(text)
    task.appendChild(button)

    taskList.insertBefore(task, taskList.firstChild)
}

const removeTask = (task, animate) => {
    task.classList.add('removed-task')
    if(animate) animateRestUp()
    
    setTimeout(() => {
        task.remove()
        updateStatus()
        updateCount()
    }, 800);
}

const animateDown = () => {
    const tasks = document.querySelectorAll('li')

    for(let task of tasks){
        task.classList.add('fade-task-down')
        setTimeout(() => {
            task.classList.remove('fade-task-down')
        }, 400);
    }
}

const animateRestUp = () => {
    const tasks = document.querySelectorAll('li')

    setTimeout(() => {
        let isFound = false
        let deletedIndex

        tasks.forEach((task, index) => {
            if(!isFound && task.classList.contains('removed-task')){
                isFound = true
                deletedIndex = index
            }
            if(deletedIndex !== undefined && deletedIndex < index){
                task.classList.add('fade-task-up')

                setTimeout(() => {
                    task.classList.remove('fade-task-up')
                }, 400);
            }
        })
    }, 400);
}

const disableButton = (button, duration) => {
    button.disabled = true

    setTimeout(() => {
        button.disabled = false
    }, duration);
}

const updateStatus = () => {
    if(document.querySelectorAll('ul li').length == 0){
        allDone.classList.toggle('hidden')
    }
}

const updateCount = () => {
    const taskList = document.querySelectorAll('ul li')
    let count = Array.from(taskList).reduce((count, element) => {
        return element.classList.contains('task-done') || element.classList.contains('removed-task') ? count : count + 1
    }, 0)
    document.querySelector('.info-container span').textContent = count
}

const completeAll = () => {
    const taskList = document.querySelectorAll('ul li')
    taskList.forEach((task) => {
        if(!task.classList.contains('task-done')){
            task.classList.add('task-done')
        }
    })
}

const removeAll = () => {
    const taskList = document.querySelectorAll('ul li')
    taskList.forEach((task) => {
        removeTask(task)
    })
}

form.onsubmit = (e) => {
    e.preventDefault()
    createTask(input.value)
    animateDown()
    updateCount()
    disableButton(document.querySelector('.input-container button'), 400)
    input.value = ''
}
document.querySelector('.complete-all-btn').addEventListener('click', () => {
    completeAll()
    updateCount()
})
document.querySelector('.delete-all-btn').addEventListener('click', removeAll)