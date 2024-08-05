import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "@/components/magicui/animated-modal";

export function AnimatedModal({ title, description, children, trigger,width  }: {width?:string, title: string, description: string, children: React.ReactNode, trigger: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center ">
            <Modal>
                <ModalTrigger >{trigger}</ModalTrigger>
                <ModalBody width={width||"50%"}>
                    <ModalContent >
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            {title}
                            {description && <p className="text-neutral-500 text-sm dark:text-neutral-300">{description}</p>}
                        </h4>
                        <div className="container">
                            {children}
                        </div>
                    </ModalContent>
                    {/* <ModalFooter className="gap-4">
                        <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                            Cancel
                        </button>
                        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                            Book Now
                        </button>
                    </ModalFooter> */}
                </ModalBody>
            </Modal>
        </div>
    );
}
