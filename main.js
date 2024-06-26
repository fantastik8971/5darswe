// const cars = ["BMW" , "MERS", "BUGATTI", "AUDI", "FERRARI"];



const fantastik = [
    {
        ism:"sanjar",
        familya:"safarov",
        yosh:15,
        tugilganyili:2009,

    },
    {
        ism:"samir",
        familya:"saidullayev",
        yosh:16,
        tugilganyili:2008,

    },
    {
        ism:"umid",
        familya:"mirzohidov",
        yosh:11,
        tugilganyili:2022,

    },
    {
        ism:"elshod",
        familya:"turgunjonov",
        yosh:15,
        tugilganyili:2009,

    },
    
    {
        ism:"zubayr",
        familya:"hasanov",
        yosh:15,
        tugilganyili:2009,

    },
    
    

];
fantastik.forEach(item => {
    let newName = document.createElement("h1");
    let newfamilya = document.createElement("h2");
    newName.textContent = item.ism;
    document.body.append(newName)
}

)

