import {computed, reactive} from 'vue'
// State

const inventory = reactive([{
    id: 1,
    name: 'Test artikel',
    actualAmount: 1,
    minimumAmount: 1
}, {
    id: 2,
    name: 'Test artikel 2',
    actualAmount: 2,
    minimumAmount: 1
},{
    id: 3,
    name: 'Test artikel 3',
    actualAmount: 5,
    minimumAmount: 2
},{
    id: 4,
    name: 'Test artikel 4',
    actualAmount: 4,
    minimumAmount: 1
},{
    id: 5,
    name: 'Test artikel 5',
    actualAmount: 7,
    minimumAmount: 3
}, {
    id: 6,
    name: 'Test artikel 6',
    actualAmount: 2,
    minimumAmount: 1
}, {
    id: 7,
    name: 'Test artikel 7',
    actualAmount: 4,
    minimumAmount: 4
}]);

// Getters and Setters
export const getAllProducts = computed(() => { return inventory; })

// Actions