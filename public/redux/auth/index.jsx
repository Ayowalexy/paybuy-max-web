import { createSlice } from '@reduxjs/toolkit'
import { signUpUser, verifyOtp, loginUser, userProfile, logoutUser, updateUserProfile, resendOtp} from './thunk-action'

const initialState = {
    // data: 0,
    // products: [],
    // details: {}
    loading: 'idle', 
    user: {},
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // setData: (state, action) => {
        //     return {
        //         ...state, data: action.payload
        //     }
        // },
        // setProducts: (state, action) => {
        //     return{
        //         ...state, products: action.payload
        //     }
        // },
        // setDetails: (state, actions) => {
        //     return{
        //         ...state, details: actions.payload
        //     }
        // }
    },
    extraReducers: (builder) => {
        // sign up a user
        builder.addCase(signUpUser.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(signUpUser.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
            }
        })

        builder.addCase(signUpUser.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })

        // verify otp
        builder.addCase(verifyOtp.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(verifyOtp.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
            }
        })

        builder.addCase(verifyOtp.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })
        // login user
        builder.addCase(loginUser.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(loginUser.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
            }
        })

        builder.addCase(loginUser.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })
          // user profile
          builder.addCase(userProfile.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(userProfile.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
                user: action.payload
            }
        })

        builder.addCase(userProfile.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })
           // logout a user
           builder.addCase(logoutUser.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(logoutUser.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
            }
        })

        builder.addCase(logoutUser.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })
        // update user profile
        builder.addCase(updateUserProfile.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(updateUserProfile.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
            }
        })

        builder.addCase(updateUserProfile.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })
           // resend otp
           builder.addCase(resendOtp.pending, (state) => {
            return { ...state, loading: 'pending' }
        });

        builder.addCase(resendOtp.fulfilled, (state, action) => {
            return {
                ...state,
                loading: 'successful',
            }
        })

        builder.addCase(resendOtp.rejected, (state, action) => {
            return { ...state, loading: 'failed' }
        })
    }
})
export const authReducers = authSlice.reducer
export const {setData, setProducts, setDetails}= authSlice.actions
