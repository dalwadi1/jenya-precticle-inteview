import { authSchema } from '@/helper/loginValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogin } from './auth.action'
import { useNavigate } from 'react-router'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { loading, user } = useSelector((state) => state.userLogin)

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(authSchema)
    })

    const onSubmit = (data) => {
        dispatch(UserLogin(data))
    }

    useEffect(() => {
        if (user) {
            navigate('/dashboard')
        }
    }, [user])
    
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[350px] flex flex-col gap-4 shadow-2xl p-5'>
                <div className='p-4'>
                    <h4>Wellcome Back 👋</h4>
                </div>
                <div className='flex flex-col gap-2 '>
                    <input
                        type="text"
                        placeholder='enter username'
                        className='py-1 px-3 border rounded-xl'
                        {...register('username')}
                    />
                    {errors.username && <p className='text-xs text-red-600'>{errors?.username?.message}</p>}

                </div>
                <div className='flex flex-col gap-2 '>
                    <input
                        type="text"
                        placeholder='password'
                        className='py-1 px-3 border rounded-xl'
                        {...register('password')} />
                    {errors.password && <p className='text-xs text-red-600'>{errors?.password?.message}</p>}
                </div>
                <div className='flex flex-col gap-2 '>
                    <button disabled={loading} className='w-full disabled:bg-gray-500 cursor-pointer bg-black text-white py-1 rounded-2xl' type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
