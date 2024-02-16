"use client"

import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { PlusIcon } from 'lucide-react'
import { FC, useState } from 'react'

interface ClientProps {

}

const Client: FC<ClientProps> = ({ }) => {

    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const toggleDay = (day: string) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
        console.log(day); // Log the selected day
    };


    return (
        <div className='w-full h-full'>
            <div className='flex justify-between items-center px-8 py-8'>
                <Header
                    title='Daily To-Do&apos;s'
                    description='Stay organized and efficient by managing your daily tasks effortlessly.'
                />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className='rounded-full' variant="outline"><PlusIcon className='mr-4' /> Create new</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>New Daily To-Do</SheetTitle>
                            <SheetDescription>
                                Please provide the details below and click &apos;Save&apos; when finished.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right">
                                    Label
                                </Label>
                                <Input id="label" name='label' placeholder='Math lessons' className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right">
                                    Time
                                </Label>
                                <Input id="time" name='time' type='time' className="col-span-3" />
                            </div>
                            <div className="grid items-center gap-4">
                                <Label className="text-right">Reptition</Label>
                                <div className='grid grid-cols-5'>
                                    {['MON', 'TUE', 'WED', 'THU', 'FRI'].map(day => (
                                        <Button
                                            key={day}
                                            onClick={() => toggleDay(day)}
                                            variant={selectedDays.includes(day) ? 'default' : 'outline'}
                                        >
                                            {day}
                                        </Button>
                                    ))}
                                </div>
                            </div>


                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
            <Separator />
            <div className='px-8 py-8'>

            </div>

        </div>
    )
}

export default Client