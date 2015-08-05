FamousFramework.scene('svitlana:radio', {
    behaviors: {
        '#radioRoot': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [250, 300],
            'position-z': '1',
            'rotation-y': function (angle) {
                return angle;
            },
            'style': function (containerColor2) {
                return {
                    'background-color': containerColor2,
                    'border-radius': '2px',
                    'perspective': '1000px'
                };
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
            'align': [0.5, 0],
            'origin': [0.5, 0],
            'mount-point': [0.5, 0],
            'size': [250, 300],
            'style': function (containerColor2) {
                return {
                    'border-radius': '2px',
                    'background-color': containerColor2,
                    'overflow': 'hidden',
                };
            },
            'position-z': '-2',
            'opacity': function (svOpacity) {
                return svOpacity;
            },

            'rotation-y': function () {
                return Math.PI;
            },
        },
        '#programsHeader': {
            'align': [0.5, 0],
            'origin': [0.5, 0],
            'mount-point': [0.5, 0],
            'size': [250, 50],
            'style': function (containerColor1) {
                return {
                    'background-color': containerColor1,
                    'box-shadow': 'rgba(0, 0, 0, 0.298039) 0px 1px '
                };
            },
            'position-z': '-8',
        },
        '#slider': {
            'align': [0.5, 1],
            'origin': [0.5, 1],
            'mount-point': [0.5, 1],
            'size': [240, 176],
            'style': function (containerColor2) {
                return {
                    'border-radius': '2px',
                    'background-color': containerColor2,
                    'overflow': 'hidden',
                };
            },
        },
        '#forw': {
            'align': [0.95, 0.38],
            'origin': [1, 0],
            'mount-point': [0.5, 0.5],
            'size': [26, 26],
            'position-z': '-2',
            'background-color': '#1C1D20',
            content: function () {
                return `<img src='https://s3-us-west-2.amazonaws.com/svet.com/radio/arrow-right.png'/>`;
            },
            'style': {
                'cursor': 'pointer',
            }
        },
        '#back': {
            'align': [0.85, 0.38],
            'origin': [1, 0],
            'mount-point': [0.5, 0.5],
            'size': [26, 26],
            'position-z': '-2',
            content: function () {
                return `<img src='https://s3-us-west-2.amazonaws.com/svet.com/radio/arrow-left.png'/>`;
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
            //content: function () {
            //    return `<img src='https://s3-us-west-2.amazonaws.com/svet.com/radio/orange-backdrop-200.jpg'/>`;
            //},
            'style': function (containerColor3) {
                return {
                    'border-radius': '2px',
                    'background-color': containerColor3,
                    'text-align': 'center',
                    'font-size': '1.8em',
                    'padding-top': '8px',
                    'color': '#393939',
                    'box-shadow': 'rgba(0, 0, 0, 0.298039) 0px 3px 5px -1px '
                };
            },

            '$repeat': function (programs) {
                return programs;
            },
            'content': function ($index) {
                return '<div> July 25</div>';
            },
            'position-x': function ($index, listPosition, progWidth, progMargin) {

                return -($index * progWidth + listPosition + $index * progMargin);
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
                var progWidth = $state.get('progWidth');
                var progMargin = $state.get('progMargin');
                console.log(listPosition);

                if (listPosition >= 0) {
                    return;
                }
                $state.set('listPosition', Math.floor($state.get('listPosition') + (progWidth + progMargin)), {
                    duration: 1000,
                    curve: 'easeOutBounce'

                });
            }
        },
        '#forw': {
            'click': function ($state) {
                var listPosition = $state.get('listPosition');
                var progWidth = $state.get('progWidth');
                var progMargin = $state.get('progMargin');
                var programs = $state.get('programs');
                console.log(listPosition);

                if (listPosition < (-(programs.length - 2) * (progWidth + progMargin))) {
                    return;
                }

                $state.set('listPosition', Math.floor($state.get('listPosition') - (progWidth + progMargin)), {
                    duration: 1000,
                    curve: 'easeOutBounce'

                });

            }
        }
    },
    states: {
        progWidth: 164,
        progHeight: 164,
        progMargin: 5,
        containerColor1: '#E0E0E0',
        containerColor2: '#F5F5F5',
        containerColor3: '#FAFAFA',
        containerRed: '#E53935',
        programs: radioPrograms,
        activeIndex: 0,
        listPosition: 0,
        angle: Math.PI,
        svOpacity: 1,
    },
    tree: 'tree.html'
}).config({
    includes: [
        'style.css',
        'styles/font-awesome.min.css',
        'programs.js'
    ]
});
