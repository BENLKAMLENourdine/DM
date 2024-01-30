<template>
    <div class="grid grid-cols-3 gap-4">
        <div>
            <OrganismsAd text="Sports car with the best<br> design and acceleration"
                         description="Safety and comfort while driving a<br> futuristic and elegant sports car"
                         background-image="bg1"
                         :without-button="true"
                         button-bg-color="bg-primary-500"
                         background-color="bg-information-500"
                         class="col-span-2 md:col-span-1"/>
        </div>
        <div class="col-span-2 bg-primary-0 px-4 py-4 rounded-md">
            <p>Nissan GT - R</p>
            <div>
                <AtomsIconsStar />
                <AtomsIconsStar />
                <AtomsIconsStar />
                <AtomsIconsStar />
                <AtomsIconsStar />

                <p>440+ reviewer</p>
            </div>
            <p>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
            <div class="grid grid-cols-3 gap-2">
                <MoleculesCarOption title="TypeCar" value="Sport" />
                <MoleculesCarOption title="TypeCar" value="Sport" />
                <MoleculesCarOption title="TypeCar" value="Sport" />
                <MoleculesCarOption title="TypeCar" value="Sport" />
            </div>

            <div class="flex justify-between">
                <p>80/day</p>
                <AtomsButton>
                    Rent Now
                </AtomsButton>
            </div>
        </div>
    </div>
</template>