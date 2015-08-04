FamousFramework.scene('svitlana:radio', {
    behaviors: {
        '#radioRoot': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [250, 250],
            'position-z': '1',
            'rotation-y': function (angle) {
                return angle;
            },
            'style': {
                'border-radius': '2px',
                'background-color': '#F5F5F5',
                'perspective': '1000px'
            },
            'unselectable': true
        },
        '#radioTitle': {
            'content': function () {
                return `<div>Radio "OSA"</div>`;
            },
            'style': {
                'font-size': '2em',
                'text-align': 'center',
                'color': '#616161'
            },
            'position-z': '2'
        },
        '#radioLogo': {
            'align': [0.5, 0.6],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [200, 200],
            'content': function () {
                return `<img src='https://s3-us-west-2.amazonaws.com/svet.com/radio/wasp.jpg'/>`;
            },
            'style': {
                'border-radius': '2px',
                'cursor': 'pointer'

            },
            'position-z': '3'
        },
        '#programsRoot': {
            'align': [0.5, 0.6],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [250, 200],
            'style': {
                'border-radius': '2px',
                'background-color': 'green',
                'overflow': 'hidden'
            },
            'position-z': '-2',
            'opacity': function (svOpacity) {
                return svOpacity;
            },

            'rotation-y': function () {
                return Math.PI;
            },
        },
        '#slider': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [200, 200],
            'style': {
                'border-radius': '2px',
                'background-color': 'blue',
                'overflow': 'hidden',
            },

        },
        '#forw': {
            'align': [0.97, 0.5],
            'origin': [0, 0],
            'mount-point': [0.5, 0.5],
            'size': [20, 20],
            'position-z': '-2',
            content: function () {
                return "<div>N</div>"
            },
            'style': {
                'cursor': 'pointer',
            }
        },
        '#back': {
            'align': [0.07, 0.5],
            'origin': [0, 0],
            'mount-point': [0.5, 0.5],
            'size': [20, 20],
            'position-z': '-2',
            content: function () {
                return "<div>P</div>"
            },
            'style': {
                'cursor': 'pointer',
            }
        },
        '.program': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': function (progWidth, progHeight) {
                return [progWidth, progHeight];

            },
            'style': {
                'color': 'black',
                'text-align': 'center',
                'font-size': '4em'
            },

            '$repeat': function (programs) {
                return programs;
            },
            'content': function ($index) {
                return '<div>' + ($index ) + '</div>';
            },
            'position-x': function ($index, listPosition, progWidth) {

                return -($index * progWidth + listPosition + $index * 5);
            },
            'position-z': function ($index, activeIndex) {
                var finalIndex = $index * 4;
                if ($index === activeIndex) {
                    finalIndex += 100;
                }
                return finalIndex;
            },

        }
    },
    events: {
        '#radioLogo,#slider': {
            'click': function ($state) {
                $state.set('angle', $state.get('angle') + Math.PI, {
                    duration: 1000
                });
                $state.set('svOpacity', $state.get('svOpacity') === 0 ? 1 : 0, {
                    duration: 1000
                });
            }
        },
        '#back': {
            'click': function ($state) {
                var listPosition = $state.get('listPosition');
                console.log(listPosition);

                if (listPosition >= 0) {
                    return;
                }
                $state.set('listPosition', Math.floor($state.get('listPosition') + 145), {
                    duration: 1000,
                    curve: 'easeOutBounce'

                });
            }
        },
        '#forw': {
            'click': function ($state) {
                var listPosition = $state.get('listPosition');
                var programs = $state.get('programs');
                console.log(listPosition);

                if (listPosition < (-(programs.length - 2) * 145)) {
                    return;
                }

                 $state.set('listPosition', Math.floor($state.get('listPosition') - 145), {
                    duration: 1000,
                    curve: 'easeOutBounce'

                });

            }
        }
    },
    states: {
        progWidth: 140,
        progHeight: 160,
        programs: radioPrograms,
        activeIndex: 0,
        listPosition: 0,

        angle: 0,
        svOpacity: 0,
    },
    tree: 'tree.html'
}).config({
    includes: [
        'style.css',
        'programs.js'
    ]
});
