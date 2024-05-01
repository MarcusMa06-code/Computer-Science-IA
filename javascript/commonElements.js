// Common DOM elements
const currentTime = document.getElementById('register-time');
const boundaryDate = document.querySelectorAll('#boundary-date');
const historyNav = document.querySelector('.history-data-nav');
const todayNav = document.querySelector('.today-nav');
const exportAll = document.querySelector('.export-all-nav');
const form = document.getElementById('registration-form');
const table = document.getElementById('registration-table');
const commonNameInput = document.getElementById('common-name');
const oneClickButton = document.getElementById('one-click-register-all');

// Common date variables
var currentDateString = '';
var startDateString = '';
var endDateString = '';

var tempStudent = new Object();