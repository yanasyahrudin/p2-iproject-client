import { defineStore } from 'pinia'

import axios from 'axios'

const server = 'http://localhost:3002/'

export const useAppStore = defineStore('app', {
    state: () => ({
        compactDisc: [],
        tShirt: [],
        loginUser: []
    }),
    actions: {
        async fetchCompactDisc() {
            try {
                let { data } = await axios({
                    method: 'GET',
                    url: `${server}items/compactDisc`,

                })
                console.log(data, 'ppppp');
                this.compactDisc = data
            } catch (error) {
                console.log(error);
            }
        },
        async fetchTShirt() {
            try {
                let { data } = await axios({
                    method: 'GET',
                    url: `${server}items/tShirt`
                })
                console.log(data);
                this.tShirt = data
            } catch (error) {
                console.log(error);
            }
        },
        async buyItem() {
            try {
                let { data } = await axios({
                    method: 'POST',
                    url: `${server}users/midtrans`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

            } catch (error) {
                
            }
        },
        async login(input) {
            try {
                console.log('storess');
                let { data } = await axios({
                    method: 'POST',
                    url: `${server}users/login`,
                    data: input
                })
                localStorage.setItem('access_token', data.access_token)
                localStorage.setItem('payment', data.payment)
                this.router.push('/')
            } catch (error) {
                console.log(error);
            }
        },
        async register(input) {
            try {
                console.log('storess');
                let { data } = await axios({
                    method: 'POST',
                    url: `${server}users/register`,
                    data: input
                })
                this.router.push('/login')
            } catch (error) {
                console.log(error)
            }
        },
        async fetchLoginUser() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: `${server}users`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.loginUser = data
            } catch (error) {
                console.log();
            }
        },
        async updatePayment() {
            try {
                let { data } = await axios({
                    method: 'PATCH',
                    url: `${server}users/status`,
                    data: {
                        payment: 'Member'
                    },
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
            } catch (error) {
                console.log(error);
            }

        },
        async upgradeMembership() {
            try {
                console.log('masuk sini')
                const { data } = await axios({
                    method: "GET",
                    url: `${server}users/midtrans`,
                    headers: {
                      access_token: localStorage.getItem("access_token"),
                    },
                  });
                  const cb = this.updatePayment;
                  window.snap.pay(data.token, {
                    onSuccess: function (result) {
                      cb();
                    },
                  });
            } catch (error) {
                console.log(error)
            }
        }
    }
})