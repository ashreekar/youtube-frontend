import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Step1 from '../components/CreateAccount/Step1'
import Step3 from '../components/CreateAccount/Step3'
import Step2 from '../components/CreateAccount/Step2'

function CreateAccount() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm()

  const [step, setStep] = useState(0)

  const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log(data)
    navigate('/');
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md p-10 w-full max-w-md border border-gray-200 rounded-xl">

        <h2 className="text-3xl mb-6 text-center font-semibold">
          Get on board
        </h2>

        <form className="space-y-5 flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
          <Step1 register={register} step={step} errors={errors} watch={watch} trigger={trigger} setStep={setStep} />
          <Step2 register={register} step={step} errors={errors} watch={watch} trigger={trigger} setStep={setStep} />
          <Step3 register={register} step={step} errors={errors} setStep={setStep} />
        </form>

      </div>
    </div>
  )
}

export default CreateAccount