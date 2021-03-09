import Vue from "vue";

const vueMetaAppID = "vue-meta-app-1";
const hid = "foo";

const plugin = {
  install(V) {
    let metaAppSetter

    const rootMixin = {
      beforeCreate() {
        const isRoot = this.$root._uid === this._uid;
        if (!isRoot) {
          return;
        }
        const { set } = this.$meta().addApp(vueMetaAppID);
        metaAppSetter = set
      },
    };

    const sampleMixin = {
      mounted() {
        metaAppSetter({
          script: [
            {
              hid,
              type: "application/ld+json",
              innerHTML: 'test' + this._uid,
            },
          ],
          __dangerouslyDisableSanitizersByTagID: {
            [hid]: ["innerHTML"],
          },
        })
      },
    };

    V.mixin(rootMixin);
    V.mixin(sampleMixin);
  },
};

Vue.use(plugin);
