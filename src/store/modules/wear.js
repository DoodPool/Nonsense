import { wearService } from '../../services/wear.service.js'

export default {
    state() {
        return {
            wears: null,
        }
    },
    mutations: {
        setWears(state, { wears }) {
            state.wears = wears
        },
        // removeWear(state, { wearId }) {
        //     const idx = state.wears.findIndex(wear => wear._id === wearId)
        //     state.wears.splice(idx, 1)
        // },
        // updateWear(state, { savedWear }) {
        //     console.log(savedWear)
        //     const idx = state.wears.findIndex(wear => wear._id === savedWear._id)
        //     state.wears.splice(idx, 1, savedWear)
        // },
        // saveWear(state, { savedWear }) {
        //     state.wears.push(savedWear)
        // },
    },
    actions: {
        async loadWears(context) {
            try {
                const wears = await wearService.query()
                context.commit({ type: 'setWears', wears })
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        // async removeWear(context, { wearId }){
        //     try {
        //         await wearService.remove(wearId)
        //         context.commit({ type: 'removeWear', wearId })
        //     } catch (err) {
        //         console.log(err)                
        //         throw err
        //     }
        // },
        // async saveWear(context, { wear }) {
        //     const isUpdate = !!wear._id

        //     try {
        //         const savedWear = await wearService.save(wear)
    
        //         if(isUpdate) {
        //             context.commit({ type: 'updateWear', savedWear })
        //         } else {
        //             context.commit({ type: 'saveWear', savedWear })
        //         }
        //     } catch (err) {
        //         console.log(err)
        //         throw err
        //     }
        // }
    },
    getters: {
        wears(state) { return state.wears }
    },
}