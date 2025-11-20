import { useState, lazy, Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import LineLoader from '../components/Loaders/LineLoader';

const Step1 = lazy(() => import('../components/CreateAccount/Step1'));
const Step2 = lazy(() => import('../components/CreateAccount/Step2'));
const Step3 = lazy(() => import('../components/CreateAccount/Step3'));

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
    navigate('/')
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">

      <div className="bg-white shadow-md p-6 md:p-10 w-full max-w-[900px]
        min-h-[60vh] border border-gray-200 rounded-xl 
        flex flex-col md:flex-row gap-6 md:gap-10 items-center">

        <div className="hidden md:flex flex-col items-center justify-center w-1/2 gap-3">
          <img src="youtube.png" className="h-14 w-16" alt="yt" />
          <h2 className="text-4xl font-semibold">Get on Board</h2>
          <p className="text-lg text-gray-600">Create your YouTube account</p>
        </div>

        <div className="md:hidden flex flex-col items-center mb-4">
          <img src="youtube.png" className="h-10 w-12" alt="yt" />
          <h2 className="text-3xl font-semibold mt-2">Get on Board</h2>
          <p className="text-sm text-gray-600">Create your YouTube account</p>
        </div>

        <form className="space-y-5 w-full md:w-1/2" onSubmit={handleSubmit(onSubmit)}>

          {step==0 && <Suspense fallback={<LineLoader/>}>
            <Step1
              step={step}
              register={register}
              errors={errors}
              trigger={trigger}
              setStep={setStep}
            />
          </Suspense>}

        { step==1 && <Suspense fallback={<LineLoader/>}>
            <Step2
              step={step}
              register={register}
              errors={errors}
              watch={watch}
              trigger={trigger}
              setStep={setStep}
            />
          </Suspense>}

        { step==2 && <Suspense fallback={<LineLoader/>}>
            <Step3
              step={step}
              register={register}
              setStep={setStep}
            />
          </Suspense>}

        </form>

      </div>
    </div>
  )
}

export default CreateAccount