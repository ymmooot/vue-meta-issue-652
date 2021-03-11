import Vue from "vue";

const vueMetaAppID = "vue-meta-app-1";

const plugin = {
  install(V) {
    const sampleMixin = {
      created() {
        const { set } = this.$meta().addApp(vueMetaAppID);
        set({
          script: [
            {
              hid: 'test-script',
              type: "application/ld+json",
              json: { test: this._uid },
            },
          ],
        })
      },
    };

    V.mixin(sampleMixin);
  },
};

Vue.use(plugin);
