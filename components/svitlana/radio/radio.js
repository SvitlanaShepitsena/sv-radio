FamousFramework.scene('svitlana:radio', {
    behaviors: {
        '#radioRoot': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [250, 250],
            'style': {
                'background-color': '#F5F5F5',
                'perspective': '10000px'
            },
        },
        '#frontFace': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [250, 250],
            'rotation-y': function (angle) {
                return angle;
            },
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
                'border-radius': '2px'

            },
        },
        '#programsRoot': {
            'align': [0.5, 0.6],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [200, 200],
            'style': {
                'border-radius': '2px', 'background-color': 'green'
            },
        },
        '#backFace': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [250, 250],
            'opacity': function (opacity) {
                return opacity;
            }
        },
        '.program': {
            'align': [0.5, 0.6],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [140, 180],
            '$repeat': function () {
                return [
                    {
                        'style': {
                            'background-color': 'brown'
                        }
                    },
                    {
                        'style': {
                            'background-color': 'yellow'
                        }
                    },
                    {
                        'style': {
                            'background-color': 'black'
                        }
                    },
                    {
                        'style': {
                            'background-color': 'blue'
                        }
                    },
                ]
            },
            'position-x': function ($index) {

                return $index* 100;
            }

        }
    },
    events: {
        '#radioRoot': {
            'click': function ($state) {
                $state.set('angle', $state.get('angle') + Math.PI, {
                    duration: 1000
                });
                $state.set('opacity', $state.get('opacity') === 0 ? 1 : 1, {
                    duration: 1000
                });
            }
        }
    },
    states: {
        angle: 0,
        opacity: 0
    },
    tree: 'tree.html'
}).config({
    includes: [
        'style.css'
    ]
});
