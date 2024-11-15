let labels = []
let budgetData = []
let cowsData = []

const main = (days) => {
    labels = []
    budgetData = []
    cowsData = []

    const cow_price = 300
    const milk_price = 3
    const cow_efficiency = 3
    const chicken_price = 15000

    let cows = 1
    let chicken = 0
    let cows_today = 0
    let total_milk = 0
    let milk_today = 0

    let budget = 0
    let total_income = 0
    let daily_income = 0
    
    for(let i = 1;  i <= days; i++){
        milk_today = cows * cow_efficiency
        total_milk += milk_today
        daily_income = milk_price * milk_today
        budget += daily_income
        total_income += daily_income
        if(daily_income >= chicken_price){
            chicken++
            budget-=chicken_price
        }else{
            cows_today = Math.floor(budget/cow_price)
            budget -= cows_today * cow_price
            cows += cows_today
        }
        
        labels.push(i)
        cowsData.push(cows)
        budgetData.push(budget)
    }

    return `
    <i>📅 Statistics for day <b>${days}</b> </i> <br/>
    <hr>
    🐄 Total Cows Owned: <b>${cows}</b> <br/>
    🐮 Cows Bought Today: <b>${cows_today}</b> <br/>
    🍼 Today Milked Milk: <b>${milk_today}</b> litres <br/> 
    🥛 Total Amount of Milk: <b>${total_milk}</b> litres <br/>
    🐔 Chicken Farms: <b>${chicken}</b> <br/>
    💵 Money Earned Today: $<b>${daily_income}</b> <br/>
    💸 Money Spent Today: $<b>${cows_today * cow_price}</b> <br/> 
    🫰 Daily Revenue: $<b>${daily_income - cows_today * cow_price}</b> <br/>
    💲 Current Budget: $<b>${budget}</b> <br/>
    📈 Total Income: $<b>${total_income}</b> <br/>
    📉 Total Expense: $<b>${cows * cow_price - 300}</b> <br/>
    `
}

const input = document.querySelector('input')
const button = document.querySelector('button')
const results = document.querySelector('.statistics')
const ctx = document.getElementById('myChart');
let chartInstance;

button.addEventListener('click', () => {
    results.innerHTML = main(input.value)

    if(chartInstance) chartInstance.destroy()

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: '#3B94D9',
                label: 'Budget',
                data: budgetData,
                borderWidth: 1,
                borderColor: '#3B94D9',
            }, {
                backgroundColor: '#238738',
                label: '# of Cows',
                data: cowsData,
                borderWidth: 1,
                borderColor: '#238738',
            }],
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
    });

    // input.value = ''
})




