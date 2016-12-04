<IndexRoute component={Home} />
<Route path='/' component={App}>
<Route path='show' component={Show} />
<Route path='recommend' component={Recommend} />
<Route path='release' component={Release} />
<Route path='personal' component={Personal} />
<Route path='sanbu/:title' component={Sanbu} />
<Route path='xiaoxiang/:title' component={Xiaoxiang} />
