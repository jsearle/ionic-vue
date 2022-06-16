<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-header>
          <ion-toolbar>
            <ion-title>Menú</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>{{ storage.datos.dato1 }}</ion-list-header>
            <ion-note>{{ storage.datos.dato2 }} (desde storage)</ion-note>

            <ion-menu-toggle
              auto-hide="false"
              v-for="(p, i) in appPages"
              :key="i"
            >
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon
                  slot="start"
                  :ios="p.iosIcon"
                  :md="p.mdIcon"
                ></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="labels-list">
            <ion-list-header>Etiquetas</ion-list-header>

            <ion-item
              v-for="(label, index) in labels"
              lines="none"
              :key="index"
            >
              <ion-icon
                slot="start"
                :ios="bookmarkOutline"
                :md="bookmarkSharp"
              ></ion-icon>
              <ion-label>{{ label }}</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/vue";
import { defineComponent, ref, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
import {
  globe,
  server,
  archiveSharp,
  chatbox,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  home,
  create,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  camera
} from "ionicons/icons";
import { useStorage } from "./composables/storage";
import { useSQLite } from "vue-sqlite-hook";
import { defineCustomElements } from '@ionic/pwa-elements/loader';

export default defineComponent({
  name: "App",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonApp,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonRouterOutlet,
    IonSplitPane,
  },
  setup() {
    const selectedIndex = ref(0);
    const storage = useStorage();
    const appPages = [
      {
        title: "Inicio",
        url: "/home",
        iosIcon: home,
        mdIcon: home,
      },
      {
        title: "Formularios",
        url: "/forms",
        iosIcon: create,
        mdIcon: create,
      },
      {
        title: "Visuales",
        url: "/visuals",
        iosIcon: heartOutline,
        mdIcon: heartSharp,
      },
      {
        title: "Alertas",
        url: "/others",
        iosIcon: chatbox,
        mdIcon: chatbox,
      },
      {
        title: "Storage",
        url: "/storage",
        iosIcon: archiveSharp,
        mdIcon: archiveSharp,
      },
      {
        title: "APIs",
        url: "/api",
        iosIcon: globe,
        mdIcon: globe,
      },
      {
        title: "Bases de datos SQLite",
        url: "/database",
        iosIcon: server,
        mdIcon: server,
      },
      {
        title: "Capacitor",
        url: "/capacitor",
        iosIcon: server,
        mdIcon: server,
      },
      {
        title: "Cámara",
        url: "/camera",
        iosIcon: camera,
        mdIcon: camera,
      },
      {
        title: "Geolocalicación",
        url: "/geo",
        iosIcon: globe,
        mdIcon: globe,
      },
    ];
    const labels = ["Uno", "Dos", "Tres"];
    defineCustomElements(window);
    const path = window.location.pathname.split("/").slice(-1)[0];
    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(
        (page) => page.url === "/" + path
      );
    }

    const route = useRoute();

    const app = getCurrentInstance();
    if (app != null) {
      app.appContext.config.globalProperties.$sqlite = useSQLite();
    }

    return {
      selectedIndex,
      appPages,
      labels,
      archiveSharp,
      bookmarkOutline,
      bookmarkSharp,
      heartOutline,
      heartSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      globe,
      chatbox,
      server,
      isSelected: (url: string) => (url === route.path ? "selected" : ""),
      storage,
    };
  },
});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
