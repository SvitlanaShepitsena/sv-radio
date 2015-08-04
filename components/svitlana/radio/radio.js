FamousFramework.scene('svitlana:radio', {
    behaviors: {
        '#background': {
            'style': {
                'background-color': 'lightgrey'
            }
        },
        '#radioRoot': {
            'align': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': [250, 250],
            //'content': function () {
            //    return ``;
            //},
            'rotation-y': function (angle) {
                // console.log(angle);
                return angle;
            },
            'style': {
                'border-radius': '2px',
                'background-color': '#F5F5F5'
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
            'unselectable': true
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
                'background-color': '#F5F5F5'
            },
            'unselectable': true
        }
    },
    events: {
        '#radioRoot': {
            'click': function ($state) {
                $state.set('angle', $state.get('angle') + Math.PI, {
                    duration: 1000
                });
            }
        }
    },
    states: {
        numberOfClicks: 0,
        angle: 0
    },
    tree: `
        <node id="background">
            <node id="radioRoot">
                <node id="radioLogo"> </node>
                <node id="radioTitle"> </node>
            </node>
        </node>
    `
});
