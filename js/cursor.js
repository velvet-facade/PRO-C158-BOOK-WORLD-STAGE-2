AFRAME.registerComponent("cursor-listener", {
    schema:{
        selectedItemId: {
            default:"",
            type: "string"
        },
        init: function(){
            this.handleMouseEnterEvents();
            this.handleMouseLeaveEvents();
        },
        handleBookListState: function () {
            const id = this.el.getAttribute("id");
            const comicId = ["gggtm", "ggbb", "agad",];
            if (comicId.includes(id)) {
              const comicContainer = document.querySelector("#comic-container");
              comicContainer.setAttribute("cursor-listener", {
                selectedItemId: id,
              });
              this.el.setAttribute("material", {
                color: "#D76B30",
                opacity: 1,
              });
            }},
        handleMouseEnterEvents: function () {
            //Cursor 'mouseenter' Events
            this.el.addEventListener("mouseenter", () => {
              this.handleBookListState();
            });
         },
         handleMouseLeaveEvents: function () {
            //Cursor 'mouseleave' Events
              this.el.addEventListener("mouseleave", () => {
              const { selectedItemId } = this.data;
              if (selectedItemId) {
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if (id == selectedItemId) {
                  el.setAttribute("material", {
                    color: "#0077CC",
                    opacity: 1,
                  });
                }
              }
            });
          },

    }
})