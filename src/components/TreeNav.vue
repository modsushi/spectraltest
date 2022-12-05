<script>
export default {
  props: ["nodes", "selected", "changeSelection"],
  name: "treemenu",
  data() {
    return {
      expand: {},
    };
  },
  methods: {
    toggleChildren(n, e) {
      e.preventDefault();
      e.stopPropagation();
      let toggle = this.selected === n.id;
      if (toggle) {
        this.changeSelection(null);
        this.expand = {};
        return;
      }  
      this.expand[n.id] = true;
      this.changeSelection(n.id);
    },
  }
};
</script>

<template>
  <div class="navwrap">
    <ul class="item">
      <li v-for="node in nodes" :key="node.id">
        <div
          class="liwrap"
          @click="
            (e) => {
              toggleChildren(node, e);
            }
          "
        >
          <p :class="{ active: selected != null && selected === node.id }">
            {{ node.name }}
          </p>
        </div>
        <treemenu
          v-if="((expand[node.id]))"
          :nodes="node.children"
          :selected="selected"
          :changeSelection="changeSelection"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  margin: 0;
  width: max-content;
}

li {
  padding: 5px 5px 5px 20px;
  font-size: large;
  cursor: pointer;
  list-style: none;
}
.liwrap {
  display: flex;
}
.liwrap p {
  border-bottom: 1px solid #666;
  margin: 0;
  padding: 0 5px;
  border-radius: 5px;
  transition: 200ms;
}

.liwrap p:hover {
  color: #000;
  background: #ffcd00;
}
.liwrap p.active {
  background: #ffcd00;
  color: #000;
  box-shadow: 0 0 7px -2px rgb(189, 186, 189);
}
</style>
