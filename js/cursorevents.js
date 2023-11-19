AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: { default: "", type: "string" }
      },
      init: function () {
        this.handleClickEvents();
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
      },
      handleClickEvents: function () {
        //Cursor 'click' Events
        this.el.addEventListener("click", evt => {
          const comicContainer = document.querySelector("#comic-container");
          const { state } = comicContainer.getAttribute("virtual-posters");
    
          if (state === "comic-list") {
            const id = this.el.getAttribute("id");
            const comicsId = [
              "gggtm",
              "ggbb",
              "agad",
    
            ];
            if (comicsId.includes(id)) {
              comicContainer.setAttribute("tour", {
                state: "view",
                selectedCard: id
              });
            }
          }
        });
      },
      handleComicsListState: function () {
        const id = this.el.getAttribute("id");
        const comicsId = [
            "gggtm",
            "ggbb",
            "agad",
          ];
        if (comicsId.includes(id)) {
          const comicContainer = document.querySelector("#comic-container");
          comicContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#D76B30",
            opacity: 1,
          });
        }
      },
      handleMouseEnterEvents: function () {
        //Cursor 'mouseenter' Events
        this.el.addEventListener("mouseenter", () => {
          this.handleComicsListState();
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
})