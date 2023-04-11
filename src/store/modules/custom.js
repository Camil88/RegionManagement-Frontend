import axios from "axios";


const state = {
    // toggleDrawer: true,
    allCommissions: [],
    allSalesPerformance: [],
    allCustomerAssignments: [],
    allProductsDetails: [],
    allSalesReps: [],
    allSalesRepsAssignments: [],
    allActiveUsers: [],
    allActiveUsersWithRoles: [],
    product: '',
};

const mutations = {
    //setDrawer: (state) => state.toggleDrawer = !state.toggleDrawer,
    // setDrawer(state){
    //     state.toggleDrawer = !state.toggleDrawer
    //     state.miniDrawer = !state.miniDrawer
    // }

    getAllCommissions: (state, commissions) => state.allCommissions = commissions, 
    getAllSalesPerformance: (state, performance) => state.allSalesPerformance = performance, 
    getAllCustomerAssignments: (state, custAssignments) => state.allCustomerAssignments = custAssignments, 
    getAllProductsDetails: (state, products) => state.allProductsDetails = products, 
    getAllActiveSalesReps: (state, salesReps) => state.allSalesReps = salesReps, 
    getAllSalesRepsAssignments: (state, salesRepsAssignments) => state.allSalesRepsAssignments = salesRepsAssignments, 
    getAllActiveUsers: (state, activeUsers) => state.allActiveUsers = activeUsers, 
    getAllActiveUsersWithRoles: (state, activeUsersRoles) => state.allActiveUsersWithRoles = activeUsersRoles, 
    setTopCardTitle: (state, prod) => state.product = prod

};

const actions = {
    async getAllCommissionsAction({commit}, prod)
    {
        
        const response = await axios.get(`https://localhost:44327/api/Commission/allCommissions?product=${prod}`)
        commit('getAllCommissions', response.data)
    },

    async getAllSalesPerformanceAction({commit}, prod)
    {

        const response = await axios.get(`https://localhost:44327/api/SalesPerformance/allSalesPerformance?product=${prod}`)
        commit('getAllSalesPerformance', response.data)
    },

    async getAllCustomerAssignmentsAction({commit})
    {
        const response = await axios.get("https://localhost:44327/api/Customer/allCustomerAssignments")
        commit('getAllCustomerAssignments', response.data)
    },

    async getAllProductsDetailsAction({commit})
    {
        const response = await axios.get("https://localhost:44327/api/Product/allProductsDetails")
        commit('getAllProductsDetails', response.data)
    },

    async getAllActiveSalesRepsAction({commit})
    {
        const response = await axios.get("https://localhost:44327/api/SalesRepresentatives/allActiveSalesReps")
        commit('getAllActiveSalesReps', response.data)
    },

    async getAllSalesRepsAssignmentsAction({commit})
    {
        const response = await axios.get("https://localhost:44327/api/SalesRepsAssignments/allSalesRepsAssignments")
        commit('getAllSalesRepsAssignments', response.data)
    },

    async getAllActiveUsersAction({commit})
    {
        const response = await axios.get("https://localhost:44327/api/User/allActiveUsers")
        commit('getAllActiveUsers', response.data)
    },

    async getAllActiveUsersWithRolesAction({commit})
    {
        const response = await (await axios.get("https://localhost:44327/api/UserRole/allActiveUsersWithRoles"))
        commit('getAllActiveUsersWithRoles', response.data)
    },

};

const getters = {
    titleForTopCard(state) {
        const result = state.product == '' ? 'Dashboard' : state.product
        return result
    },

    getAllSales(state)
    {
      return {
        labels: [ 'productName', 'budget', 'revenue'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#F87979',
            data: [
                state.allSalesPerformance[0].productName,
                state.allSalesPerformance[0].budget,
                state.allSalesPerformance[0].revenue
            ],
          }
        ]
    };
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};