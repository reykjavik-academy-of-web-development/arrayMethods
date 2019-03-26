let i = 0;
fetch("https://apis.is/concerts")
.then(r=>r.json())
.then(j=>{
    const htmlArray= j.results
    .filter(eventObj=>{
            return eventObj.userGroupName!=="KK"?true:false;  
    })
    .sort((a,b)=>{
        const timeA = new Date(a.dateOfShow);
        const timeB = new Date(b.dateOfShow);
        const timeAsec = timeA.getTime()
        const timeBsec = timeB.getTime()
        console.log(i);
        i++;
        return timeBsec-timeAsec; 
    })
    .map(eventObj=>{

        return `
            <div class="card">
                <div class="header">
                    <img src="${eventObj.imageSource}" alt="">
                </div>
                <div class="info">
                    <div class="info__text">
                        ${eventObj.eventDateName},
                        ${eventObj.name}, 
                        ${eventObj.eventHallName}
                    </div>
                    <div class="info__btn">
                        <a href="#" class="info__btn--a">${eventObj.userGroupName}</a>
                    </div>
                </div>
            </div>
        `
    }).forEach(eventStr=>{
        document.querySelector(".container").innerHTML += eventStr;
    })
    console.log(htmlArray);
})

/*
   <div class="card">
      <div class="header">
         <img src="https://images.unsplash.com/photo-1550055280-766ba3e748b6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
      </div>
      <div class="info">
         <div class="info__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eum quibusdam corporis, quasi libero commodi eaque explicabo hic provident praesentium.
         </div>
         <div class="info__btn">
            <a href="#" class="info__btn--a">Learn More</a>
         </div>
      </div>
   </div>
*/