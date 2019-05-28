<template>
  <div style="height: 100%;">
    <ion-list v-if="items.length">
      <ion-item-sliding @ionDrag="onDrag" v-for="(item, i) in items" :key="i" side="end">
        <ion-item
          @click="goToNote(item)"
          @touchstart="startCounting(i)"
          @touchend="stopCounting"
          @touchcancel="stopCounting"
          @mouseleave="stopCounting"
          @mouseover="stopCounting"
        >
          <ion-label>{{ item.title }}</ion-label>
          <ion-note slot="end">
            <ion-icon v-for="(cat, c) in item.categories" :key="c" :name="cat"></ion-icon>
          </ion-note>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option @click="favoriteItem(i)">Favorite!</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
    <div padding v-else>No notes found.</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // Pressing Events Variables
      interval: false,
      //
      categories: [
        {
          name: "private",
          icon: "person"
        },
        {
          name: "favorite",
          icon: "star"
        },
        {
          name: "urgent",
          icon: "clock"
        }
      ]
    };
  },
  beforeMount() {
    // if (JSON.parse(localStorage.getItem("FirstLogin"))) {
    //   this.populate();
    // }
  },
  mounted() {
    localStorage.setItem("FirstLogin", "false");
  },
  computed: {
    items() {
      return this.$store.state.noteList;
    }
  },
  methods: {
    goToNote(item) {
      const note = item;
      this.$router.push({
        name: "note",
        params: { note }
      });
    },
    populate() {
      // Is Not MORE USED
      [0, 1].forEach((e, i) => {
        let numberOfCategories = Math.floor(Math.random() * 3) + 1;
        let categories = [];
        if (i % 2 == 0) {
          for (let j = 0; j < numberOfCategories; j++) {
            let categoryIndex = Math.floor(
              Math.random() * this.categories.length
            );
            if (!categories.includes(this.categories[categoryIndex].icon)) {
              categories.push(this.categories[categoryIndex].icon);
            }
          }
        }

        setTimeout(() => {
          this.$store.commit("ADD_NEW_NOTE", {
            id: new Date().getTime(),
            title: `My Note #${i}`,
            note: `this is the description of note number ${i}`,
            categories
          });
        }, 30);
      });
    },
    // START Events Long Press Methods
    startCounting(index) {
      console.log("Start");
      this.interval = true;
      setTimeout(async () => {
        if (this.interval) {
          console.log("WUT: ", this.interval);
          await this.editItemTitle(index);
        }
      }, 500);
    },
    stopCounting() {
      console.log("Stop");
      this.interval = false;
    },
    // END Event Long Press Methods
    onDrag(event) {
      this.interval = false;
      if (event.detail.ratio < 0.05) {
        this.interval = true;
      }
      console.log("Event Obj: ", event);
      console.log("Interval Falsed: ", this.interval);
    },
    async editItemTitle(index) {
      const alert = await this.$ionic.alertController.create({
        header: "Editing Note Title",
        inputs: [
          {
            name: "title",
            placeholder: "Title",
            value: this.items[index].title
          }
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary"
          },
          {
            text: "Confirm",
            handler: e => {
              console.log(e);
              this.items[index].title = e.title;
            }
          }
        ]
      });
      await alert.present();
    },

    async favoriteItem(index) {
      const alert = await this.$ionic.alertController.create({
        header: "Favorited!",
        message: "This Note has bee <strong>favorited</strong> now.",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "warning",
            handler: e => {
              console.log("Canceled", e);
            }
          },
          {
            text: "Confirm",
            handler: e => {
              console.log("Confirmed", e);
            }
          }
        ]
      });
      await alert.present();
    }
  }
};
</script>