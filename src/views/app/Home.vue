<template>
  <div style="height: 100%;">
    <ion-list v-if="noteList.length">
      <ion-item-sliding
        id="deleteSlideButton"
        @ionDrag="onDrag"
        v-for="(item, i) in noteList"
        :key="i"
        side="end"
      >
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
          <ion-item-option slot="icon-only" color="danger" @click="deleteItem(item)">
            <ion-icon name="trash"></ion-icon>
          </ion-item-option>
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
      interval: false
    };
  },
  computed: {
    noteList() {
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
        header: `Editing Note #${this.noteList[index].id} Title`,
        inputs: [
          {
            name: "title",
            placeholder: "Title",
            value: this.noteList[index].title
          }
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: e => {}
          },
          {
            text: "Confirm",
            handler: e => {
              console.log(e);
              const note = this.noteList[index];
              note.title = e.title;
              this.$store.commit("UPDATE_NOTE", note);
            }
          }
        ]
      });
      await alert.present();
    },

    async deleteItem(item) {
      const alert = await this.$ionic.alertController.create({
        header: "Delete",
        message: "You cannot recover this not if you delete it",
        subHeader: "Do you wanna really delete this note?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "danger",
            handler: e => {
              console.log("Canceled", e);
              document.getElementById("deleteSlideButton").closeOpened();
            }
          },
          {
            text: "Confirm",
            handler: e => {
              this.$store.commit("DELETE_NOTE", item);
              console.log("Confirmed", e);
              document.getElementById("deleteSlideButton").closeOpened();
            }
          }
        ]
      });
      await alert.present();
    }
  }
};
</script>