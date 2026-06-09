const rules = {
  phone: {
    components: ["Battery", "PCB", "Screen", "Metal Frame"],
    disposal: {
      Battery: "Authorized Battery Recycler",
      PCB: "E-Waste Recycling Unit",
      Screen: "Special Glass Recycling",
      "Metal Frame": "Scrap Vendor"
    }
  },
  laptop: {
    components: ["Battery", "PCB", "Keyboard", "Metal Body"],
    disposal: {
      Battery: "Authorized Battery Recycler",
      PCB: "E-Waste Recycling Unit",
      Keyboard: "Plastic Recycling",
      "Metal Body": "Scrap Vendor"
    }
  },
  charger: {
    components: ["Wires", "Plastic", "Metal Pins"],
    disposal: {
      Wires: "Copper Extraction",
      Plastic: "Plastic Recycling",
      "Metal Pins": "Scrap Vendor"
    }
  }
};

export default rules;