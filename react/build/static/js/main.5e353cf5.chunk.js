(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(73),s=a.n(c),i=a(1),l=a(2),o=a(4),u=a(3),m=a(5),h=a(6),p=a(17),d=(a(82),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"monkaS"},r.a.createElement("img",{className:"logo",alt:"madmind",src:a(53)}),r.a.createElement("div",{className:"btn-group"},r.a.createElement(h.b,{to:"/login"},r.a.createElement("button",{className:"btn log-in"},"LOGIN")),r.a.createElement(h.b,{to:"/signup"},r.a.createElement("button",{className:"btn sign-up"},"SIGN UP"))))))}}]),t}(n.Component)),b=a(7),f=(a(91),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={id:0,username:"",password:"",passwordConfirm:"",redirect:!1},e.handleSubmit=e.handleSubmit.bind(Object(b.a)(Object(b.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleValidation",value:function(){var e=!0;return/^[a-zA-Z]+$/.test(this.state.username)||(e=!1,alert("Your username can contain only letters")),this.state.password.length<5&&(e=!1,alert("Your password must be atleast 5 characters long")),this.state.passwordConfirm!==this.state.password&&(e=!1,alert("Your passwords don't match")),e}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,password:this.state.password,passwordConfirm:this.state.passwordConfirm};if(this.handleValidation()){var n="http://joelmaenpaa.com:8000/users/register/"+"".concat(a.username,"-").concat(a.password);console.log(n),fetch(n).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){return console.log(e)}),setTimeout(function(){t.setState({redirect:!0})},1e3)}else console.log("Form has errors!")}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("div",{className:"form-group"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{className:"signup-input",type:"text",name:"username",placeholder:"Username",onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("input",{className:"signup-input",type:"password",name:"password",placeholder:"Password",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("input",{className:"signup-input",type:"password",name:"passwordConfirm",placeholder:"Confirm Password",onChange:function(t){return e.setState({passwordConfirm:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("button",{className:"signup-button",onClick:function(t){return e.handleSubmit(t)}},"SIGN UP"))))}}]),t}(n.Component)),g=(a(92),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={authenticated:!1},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement(h.c,{to:"/"},r.a.createElement("img",{className:"header-logo",alt:"madmind",src:a(53)})),r.a.createElement("nav",{className:"navbar"},r.a.createElement(h.c,{to:"/login",className:"navbar-link"},"LOGIN"),r.a.createElement(h.c,{to:"/signup",className:"navbar-link"},"SIGN UP")))}}]),t}(n.Component)),v=(a(93),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"loader-wrapper"},r.a.createElement("div",{id:"loader"}))}}]),t}(n.Component)),E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={username:"",password:""},e.handleSubmit=e.handleSubmit.bind(Object(b.a)(Object(b.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(){console.log("monkaS")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("div",{className:"form-group"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{className:"signup-input",type:"text",name:"username",placeholder:"Username",onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("input",{className:"signup-input",type:"password",name:"password",placeholder:"Password",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("button",{className:"signup-button",onClick:function(t){return e.handleSubmit(t)}},"LOGIN"))))}}]),t}(n.Component),j=(a(94),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"select-wrapper"},r.a.createElement("div",{className:"button-group"},r.a.createElement("h1",null,"Game Select"),r.a.createElement(h.b,{to:"/classic"},r.a.createElement("button",{className:"select-button"},"Classic")),r.a.createElement("button",{className:"select-button"},"Spree"),r.a.createElement("button",{className:"select-button"},"Clash")))}}]),t}(n.Component)),O=a(76);var w=function(e){return r.a.createElement("div",{className:"question"},r.a.createElement("p",null,e.question))};var N=function(e){return r.a.createElement("button",{onClick:e.onClick,id:e.id,className:"answer-button"},e.answer)};function y(e){return r.a.createElement("div",{className:"filler",style:{width:"".concat(e.percentage,"%")}})}var k=function(e){return r.a.createElement("div",{className:"progress-bar"},r.a.createElement(y,{percentage:e.percentage}))},S=(a(95),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={questions:[],isLoading:!0,time:1600,questionIndex:0,percentage:100,id:"",correctAnswer:0,points:0,gameRunning:!1},e.fetchQuestions=e.fetchQuestions.bind(Object(b.a)(Object(b.a)(e))),e.countDown=e.countDown.bind(Object(b.a)(Object(b.a)(e))),e.handleClick=e.handleClick.bind(Object(b.a)(Object(b.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}},{key:"fetchQuestions",value:function(){var e=this,t="http://joelmaenpaa.com/api/getQuestions/"+15..toString();console.log(t),fetch(t).then(function(e){return e.json()}).then(function(t){for(var a=[],n=0;n<15;n++){var r=Object(O.a)(t);r=r.splice(13*n,13);var c={};c.question=r[3],c.answers=[{text:r[4],correct:!1},{text:r[5],correct:!1},{text:r[6],correct:!1},{text:r[7],correct:!0}],e.shuffle(c.answers),a.push(c)}e.setState({questions:a,isLoading:!1,gameRunning:!0}),console.log("[Game.js fetchQuestions]",e.state)}).catch(function(e){return console.log("Failed to fetch questions",e)})}},{key:"startTimer",value:function(){this.timer=setInterval(this.countDown,10)}},{key:"countDown",value:function(){var e=this.state.time-1,t=this.state.questionIndex,a=this.state.percentage-this.state.percentage/this.state.time;this.setState({time:e,percentage:a}),14===t&&e<=0&&this.setState({gameRunning:!1}),e<=0&&(clearInterval(this.timer),this.setState({time:1600,percentage:100,questionIndex:t+1}),this.startTimer(),console.log("Question #"+(t+1)))}},{key:"handleClick",value:function(e){var t=this.state.questionIndex,a=this.state.correctAnswer+1,n=this.state.points;t>13&&this.setState({gameRunning:!1}),"correct"===e.target.id&&this.setState({correctAnswer:a,points:n+10}),clearInterval(this.timer),this.setState({time:1600,percentage:100,questionIndex:t+1}),this.startTimer(),console.log("Question #"+(t+1)),console.log("points: "+this.state.points)}},{key:"componentDidMount",value:function(){this.fetchQuestions(),this.startTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,t=this.state,a=t.questions,n=t.questionIndex,c=t.percentage;return this.state.isLoading?r.a.createElement(v,null):this.state.gameRunning?r.a.createElement("div",{className:"game-wrapper"},r.a.createElement("div",{className:"game-group"},r.a.createElement(w,{question:a[n].question}),r.a.createElement("div",{className:"answer-buttons"},a[n].answers.map(function(t){return r.a.createElement(N,{onClick:e.handleClick,id:t.correct?"correct":"incorrect",answer:t.text})})),r.a.createElement("div",{className:"timer"},r.a.createElement(k,{percentage:c})),r.a.createElement("div",{className:"points"},this.state.correctAnswer+"/"+this.state.questions.length))):this.state.gameRunning?void 0:r.a.createElement(p.a,{to:"/gamefinished"})}}]),t}(n.Component)),C=a(25),x=(a(96),a(34)),D=a.n(x),I=a(35),q=a.n(I),L=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={top10Players:[],isLoading:!0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getData",value:function(e,t){var a=this;D.a.get(e).then(function(e){var n,r=e.data;a.setState((n={},Object(C.a)(n,t,r),Object(C.a)(n,"isLoading",!1),n)),console.log(a.state.top10Players)})}},{key:"componentDidMount",value:function(){this.getData("https://jsonplaceholder.typicode.com/users","top10Players")}},{key:"render",value:function(){var e=this.state,t=e.top10Players;return e.isLoading?r.a.createElement(v,null):r.a.createElement("div",{className:"mode-wrapper"},r.a.createElement("div",{className:"Table"},r.a.createElement(q.a,{bordered:!0,hover:!0,condensed:!0,className:"blackfont"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{key:e.username},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email))})))),r.a.createElement("div",{className:"text-center"},r.a.createElement(h.b,{to:"/classic/game"},r.a.createElement("button",{className:"select-button"},"Start Match")),r.a.createElement(h.b,{to:"/gameselect"},r.a.createElement("button",{className:"select-button"},"Go Back"))))}}]),t}(n.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Dunno whatchu were looking for but it's not here..."))}}]),t}(n.Component),T=(a(165),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={top10Players:[],isLoading:!0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getData",value:function(e,t){var a=this;D.a.get(e).then(function(e){var n,r=e.data;a.setState((n={},Object(C.a)(n,t,r),Object(C.a)(n,"isLoading",!1),n)),console.log(a.state.top10Players)})}},{key:"componentDidMount",value:function(){this.getData("https://jsonplaceholder.typicode.com/users","top10Players")}},{key:"render",value:function(){var e=this.state,t=e.top10Players;return e.isLoading?r.a.createElement(v,null):r.a.createElement("div",{className:"mode-wrapper"},r.a.createElement("div",{className:"Table"},r.a.createElement(q.a,{bordered:!0,hover:!0,condensed:!0,className:"blackfont"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{key:e.username},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email))})))),r.a.createElement("div",{className:"text-center"},r.a.createElement(h.b,{to:"/classic/game"},r.a.createElement("button",{className:"select-button"},"Start Match")),r.a.createElement(h.b,{to:"/gameselect"},r.a.createElement("button",{className:"select-button"},"Go Back"))))}}]),t}(n.Component)),G=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={time:15e3,percentage:100,percentage2:100,percentage3:100},e.timeout=null,e.countDown=e.countDown.bind(Object(b.a)(Object(b.a)(e))),e.timer=0,e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.time;this.setState({timeLeft:t}),this.timeout=setTimeout(function(){return e.startTimer()},2e3)}},{key:"startTimer",value:function(){this.timer=setInterval(this.countDown,10)}},{key:"countDown",value:function(){var e=this,t=this.state.time-10;if(this.setState({time:t}),t>=1e4){var a=this.state.percentage-.1999998;this.setState({percentage:a})}if(t<=1e4){var n=this.state.percentage2-.1999998;this.setState({percentage2:n})}if(t<=5e3){var r=this.state.percentage3-.1999998;this.setState({percentage3:r})}0===t&&(this.timeout=setTimeout(function(){return e.newQuestion()},1e3),clearInterval(this.timer))}},{key:"newQuestion",value:function(){var e=this.state.time;this.setState({time:15e3}),this.setState({percentage3:100}),this.setState({percentage2:100}),this.setState({percentage:100}),this.setState({timeLeft:e}),this.timer=setInterval(this.countDown,10)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Time left: "),this.state.time,r.a.createElement(Q,{percentage3:this.state.percentage3,percentage2:this.state.percentage2,percentage:this.state.percentage}))}}]),t}(n.Component),Q=function(e){return r.a.createElement("div",{className:"flexing"},r.a.createElement("div",{className:"progress-barr"}," ",r.a.createElement(M,{percentage3:e.percentage3})),r.a.createElement("div",{className:"progress-barr"}," ",r.a.createElement(R,{percentage2:e.percentage2})),r.a.createElement("div",{className:"progress-barr"}," ",r.a.createElement(U,{percentage:e.percentage})))},M=function(e){return r.a.createElement("div",{className:"fillerr",style:{width:"".concat(e.percentage3,"%")}})},R=function(e){return r.a.createElement("div",{className:"fillerr2",style:{width:"".concat(e.percentage2,"%")}})},U=function(e){return r.a.createElement("div",{className:"fillerr3",style:{width:"".concat(e.percentage,"%")}})},A=G,Y=(a(166),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={isLoading:!0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1})}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(v,null):r.a.createElement(h.a,null,r.a.createElement(g,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",component:d,exact:!0}),r.a.createElement(p.b,{path:"/login",component:E,exact:!0}),r.a.createElement(p.b,{path:"/signup",component:f,exact:!0}),r.a.createElement(p.b,{path:"/gameselect",component:j,exact:!0}),r.a.createElement(p.b,{path:"/classic",component:T,exact:!0}),r.a.createElement(p.b,{path:"/classic/game",component:S,exact:!0}),r.a.createElement(p.b,{path:"/gamefinished",component:L,exact:!0}),r.a.createElement(p.b,{path:"/classicgame",component:A,exact:!0}),r.a.createElement(p.b,{component:P})))}}]),t}(n.Component)),B=document.querySelector("#root");s.a.render(r.a.createElement(Y,null),B)},53:function(e,t,a){e.exports=a.p+"static/media/madmind.e886468a.png"},77:function(e,t,a){e.exports=a(167)},82:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.5e353cf5.chunk.js.map