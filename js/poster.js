//Virtual posters
AFRAME.registerComponent("virtual-posters", {
    schema:{
        state: {default: "comic-list", type: "string"},
        selectedCard: {type: "string", default: "#card1"}
    },
    init: function(){
        this.comicContainer = this.el;
        this.createCards();
    },
    createCards: function(){
        const thumbNailsRef = [
            {
                id: "gggtm",
                title: "Good girl's guide to Murder",
                url: "./assets/good-girl-guide-to-murder.jpg",
            },
            {
                id:"ggbb",
                title:"Good girl, Bad Blood",
                url:"./assets/good-girl-bad-blood.jpg"
            },
            {
                id:"agad",
                title: "As Good as Dead",
                url:"./assets/as-good-as-dead.jpg"
            }
        ];
        let prevoiusXPosition = -60;

        for (var item of thumbNailsRef) {
            const posX = prevoiusXPosition + 25;
            const posY = 10;
            const posZ = -40;
            const position = { x: posX, y: posY, z: posZ };
            prevoiusXPosition = posX;
      
            // Border Element
            const borderEl = this.createBorder(position, item.id);
      
            // Thumbnail Element
            const thumbNail = this.createThumbNail(item);
            borderEl.appendChild(thumbNail);
      
            // Title Text Element
            const titleEl = this.createTitleEl(position, item);
            borderEl.appendChild(titleEl);
      
            this.comicContainer.appendChild(borderEl);
          }
          
    },
    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "circle",
          radius: 9,
        });
        entityEl.setAttribute("material", { src: item.url });
        return entityEl;
     },
      createTitleEl: function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#e65100",
          value: item.title,
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
    createBorder: function (position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "ring",
          radiusInner: 9,
          radiusOuter: 10,
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
          color: "#0077CC",
          opacity: 1,
        });
    
        entityEl.setAttribute("cursor-listener", {});
        return entityEl;
      },
})
