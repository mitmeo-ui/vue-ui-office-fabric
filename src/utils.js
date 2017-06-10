// TODO: Move to shared NPM package

import _ from 'lodash';

export default {
  getSlotNodesByTag(vue, tag, slotName) {
    let slots = vue.$slots.default;
    if (slotName) slots = vue.$slots[slotName];
    return _.filter(slots, slot =>
      slot.tag === tag,
    );
  },
};
