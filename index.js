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
  const eventOnDate = function(event) { return event.date === dateStamp }
  const timeIn = employee.timeInEvents.find(eventOnDate).hour;
  const timeOut = employee.timeOutEvents.find(eventOnDate).hour;
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
