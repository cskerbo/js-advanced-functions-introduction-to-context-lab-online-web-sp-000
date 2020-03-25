function createEmployeeRecord(employeeArray) {
  const employee = {}
  employee.firstName = employeeArray[0]
  employee.familyName = employeeArray[1]
  employee.title = employeeArray[2]
  employee.payPerHour = employeeArray[3]
  employee.timeInEvents = []
  employee.timeOutEvents = []
  return employee
}

function createEmployeeRecords(employeeArrays){
  let employees = []
  employeeArrays.forEach((employee) => {
    employees.push(createEmployeeRecord(employee))
  })
  return employees
}

function clockPunch(employeeRecord, dateStamp, eventType) {
  let date = dateStamp.split(' ')
  let timeEvent = {}
  if (eventType === 'TimeIn') {
    employeeRecord.timeInEvents.push(timeEvent)
  }
  else if (eventType === 'TimeOut') {
    employeeRecord.timeOutEvents.push(timeEvent)
  }
  timeEvent.type = eventType
  timeEvent.date = date[0]
  timeEvent.hour = parseInt(date[1])
  return employeeRecord
}

function createTimeInEvent(employeeRecord, dateStamp) {
  let eventType = 'TimeIn'
  let updatedRecord = clockPunch(employeeRecord, dateStamp, eventType)
  return updatedRecord
}

function createTimeOutEvent(employeeRecord, dateStamp) {
  let eventType = 'TimeOut'
  let updatedRecord = clockPunch(employeeRecord, dateStamp, eventType)
  return updatedRecord
}

function hoursWorkedOnDate(employeeRecord, dateStamp) {
  let timeInEvents = employeeRecord.timeInEvents
  function timeIn(timeInEvents){
    timeInEvents.forEach( (punch) => {
    if (punch.date === dateStamp) {
      return punch.hour
    }
  })
  }
  console.log(timeIn())
  let timeOutEvents = employeeRecord.timeOutEvents
  let timeOut = timeOutEvents.forEach( (event) => {
    if (event.date === dateStamp) {
      let time = event.hour
      return time
    }
  else {
    return console.log('ERROR: Date not Found')
  }
  })

  let hoursWorked = (timeOut - timeIn) / 100
  return hoursWorked
}

function wagesEarnedOnDate(employeeRecord, dateStamp) {
  let payRate = employeeRecord.payPerHour
  let hoursWorked = hoursWorkedOnDate(employeeRecord, dateStamp)
  let wagesEarned = payRate * hoursWorked
  return wagesEarned
}

function allWagesFor(employeeRecord) {
  let allWages = function() {
    employeeRecord.time
  }
}
