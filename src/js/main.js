//main.js file

[].map.call(document.querySelectorAll('.ripple'), el=> {
    el.addEventListener('click',e => {
        e = e.touches ? e.touches[0] : e;
        const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2)) * 2;
        el.style.cssText = `--s: 0; --o: 1;`;  el.offsetTop; 
        el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
    })
});


//////////////////////////////
// Table
function datatables() {
    return {
        headings: [
            {
                'key': 'userId',
                'value': 'User ID'
            },
            {
                'key': 'firstName',
                'value': 'Firstname'
            },
            {
                'key': 'emailAddress',
                'value': 'Email'
            },
            {
                'key': 'gender',
                'value': 'Gender'
            },
        ],
        users: [{
            "userId": 1,
            "firstName": "Cort",
            "emailAddress": "ctosh0@github.com",
            "gender": "Male",
        }, {
            "userId": 2,
            "firstName": "Brianne",
            "emailAddress": "bdzeniskevich1@hostgator.com",
            "gender": "Female",
        }, {
            "userId": 3,
            "firstName": "Isadore",
            "emailAddress": "ibotler2@gmpg.org",
            "gender": "Male",
        }, {
            "userId": 4,
            "firstName": "Janaya",
            "emailAddress": "jklosges3@amazon.de",
            "gender": "Female",
        }, {
            "userId": 5,
            "firstName": "Freddi",
            "emailAddress": "fdiclaudio4@phoca.cz",
            "gender": "Female",
        }, {
            "userId": 6,
            "firstName": "Oliy",
            "emailAddress": "omairs5@fda.gov",
            "gender": "Female",
        }, {
            "userId": 7,
            "firstName": "Tabb",
            "emailAddress": "twiseman6@friendfeed.com",
            "gender": "Male",
        }, {
            "userId": 8,
            "firstName": "Joela",
            "emailAddress": "jbetteriss7@msu.edu",
            "gender": "Female",
        }, {
            "userId": 9,
            "firstName": "Alistair",
            "emailAddress": "avasyagin8@gnu.org",
            "gender": "Male",
        }, {
            "userId": 10,
            "firstName": "Nealon",
            "emailAddress": "nratray9@typepad.com",
            "gender": "Male",
        }, {
            "userId": 11,
            "firstName": "Annissa",
            "emailAddress": "akissicka@deliciousdays.com",
            "gender": "Female",
        }, {
            "userId": 12,
            "firstName": "Nissie",
            "emailAddress": "nsidnellb@freewebs.com",
            "gender": "Female",

        }, {
            "userId": 13,
            "firstName": "Madalena",
            "emailAddress": "mfouchc@mozilla.org",
            "gender": "Female",
        }, {
            "userId": 14,
            "firstName": "Rozina",
            "emailAddress": "ratkinsd@japanpost.jp",
            "gender": "Female",
        }, {
            "userId": 15,
            "firstName": "Lorelle",
            "emailAddress": "lsandcrofte@google.nl",
            "gender": "Female",
        }],
        selectedRows: [],

        open: false,
        
        toggleColumn(key) {
            // Note: All td must have the same class name as the headings key! 
            let columns = document.querySelectorAll('.' + key);

            if (this.$refs[key].classList.contains('hidden') && this.$refs[key].classList.contains(key)) {
                columns.forEach(column => {
                    column.classList.remove('hidden');
                });
            } else {
                columns.forEach(column => {
                    column.classList.add('hidden');
                });
            }
        },

        getRowDetail($event, id) {
            let rows = this.selectedRows;

            if (rows.includes(id)) {
                let index = rows.indexOf(id);
                rows.splice(index, 1);
            } else {
                rows.push(id);
            }
        },

        selectAllCheckbox($event) {
            let columns = document.querySelectorAll('.rowCheckbox');

            this.selectedRows = [];

            if ($event.target.checked == true) {
                columns.forEach(column => {
                    column.checked = true
                    this.selectedRows.push(parseInt(column.name))
                });
            } else {
                columns.forEach(column => {
                    column.checked = false
                });
                this.selectedRows = [];
            }
        }
    }
}
//////////////////////////////////////
function app() {
    return {
      chartData: [112, 10, 225, 134, 101, 80, 50, 100, 200],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],

      tooltipContent: '',
      tooltipOpen: false,
      tooltipX: 0,
      tooltipY: 0,
      showTooltip(e) {
        console.log(e);
        this.tooltipContent = e.target.textContent
        this.tooltipX = e.target.offsetLeft - e.target.clientWidth;
        this.tooltipY = e.target.clientHeight + e.target.clientWidth;
      },
      hideTooltip(e) {
        this.tooltipContent = '';
        this.tooltipOpen = false;
        this.tooltipX = 0;
        this.tooltipY = 0;
      }
    }
  }

////////////////////////////
//chart
// var Chart = require('chart.js');
// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
///////////////////////////////////