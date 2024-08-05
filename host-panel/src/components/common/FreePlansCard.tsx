
import React from 'react'
import { Icons } from '../icons'
import { AtomicState } from '@/lib/atomic-state';
import ClientFormButton from './buttons/ClientButton';
import ShinyButton from '../magicui/shiny-button';
import api from '@/lib/api/handlers';


const state = new AtomicState();
const FreePlansCard = ({ data }: { data: any }) => {

  const whatsIncluded = data.benifits.filter((benifit: any) => benifit.type === "SERVICE::INCLUDED")
  const whatsNotIncluded = data.benifits.filter((benifit: any) => benifit.type === "SERVICE::NOT_INCLUDED")
  async function ApplyForNewServiceAction(prevState: any) {

    const { data } = await api.applyForNewService({
      xservice_id: prevState.xservice_id,
      service_id: prevState.id
    })
    return data
  }
  return (
    <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <h2>{state.getMessage()}</h2>
      <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none lg:flex">
        <div className="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12">
          <h3 className="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
            {data.service_name} {data.is_new && <span className="bg-blue-100 text-rose-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-rose-200 dark:text-rose-800 ms-2">
              NEW
            </span>}
          </h3>
          <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
            {data.description}
          </p>

          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                Whats included
              </h4>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>

            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
              {whatsIncluded.map((benefit: any) => (
                <li className="flex items-start lg:col-span-1" key={benefit.title}>
                  <div className="flex-shrink-0">
                    <Icons.GreenTick />
                  </div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    {benefit.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                &amp; Whats not
              </h4>
            </div>
            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
              {whatsNotIncluded.map((benefit: any) => (
                <li className="flex items-start lg:col-span-1" key={benefit.title}>
                  <div className="flex-shrink-0">
                    <Icons.RedCross />
                  </div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    {benefit.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-6 py-8 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">

          {data.plan_name === "FREE" && <span className="text-lg font-bold leading-6 gap-x-1.5 py-1.5 px-3  bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
            {data.plan_name}
          </span>}

          {data.plan_name === "PRO" && <span className="text-lg font-bold  gap-x-1.5 py-1.5 px-3 bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
            {data.plan_name}
          </span>}
          {data.plan_name === "ENTERPRISE" && <span className="text-lg font-bold  gap-x-1.5 py-1.5 px-3 bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            {data.plan_name}
          </span>}

          <div className="flex items-center justify-center mt-4 text-5xl font-extrabold leading-none text-gray-900 dark:text-white">
            <span>{data.is_paid ? <>₹{data.price.amount}/{data.price.interval.slice(0, 2)}</> : <del>₹{data.price.amount}/{data.price.interval.slice(0, 2)}</del>}</span>
          </div>
          <div className="mt-6">
            <div className="rounded-md shadow">
              {data.is_paid ?
                <ShinyButton text='Get Started' />
                :
                <ClientFormButton
                  action={ApplyForNewServiceAction}
                  toastData={{
                    title: 'Success',
                    description: 'Your request has been submitted successfully.',
                  }}
                  text='Create Your Service'
                  onResponse={{ redirect: '/services/addons' }} 
                  />}

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FreePlansCard