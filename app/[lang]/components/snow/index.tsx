'use client'

import { useEffect } from 'react';

enum Months {
    January = 1,
    February = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    September = 9,
    October = 10,
    November = 11,
    December = 12
}

import christmasHat from "@/app/christmasHat.webp";

export default function SnowComponent(props: {
    months: Months[],
    particleNumberByMonthPosition: number[],
    snowClassBGColors?: string,
    idChristmasHat?: string,
}) {

    useEffect(() => {
        const { months, particleNumberByMonthPosition, snowClassBGColors = 'bg-gray-500 dark:bg-white', idChristmasHat = 'root' } = props;

        const month = new Date().getMonth() + 1;

        Array.from(document.getElementsByTagName("img")).forEach((img) => {
            img.ondragstart = () => false;
        });

        const snowPage = (month: number) => {
            let embeddingSnow = document.getElementById('embedding--snow');

            const elementHat = document.getElementById(idChristmasHat);

            if (elementHat && month === Months.December) {
                elementHat.classList.add("relative");
                elementHat.innerHTML += `
                    <div class="absolute -top-8 md:-top-14 lg:-top-[4.5rem] -left-6 md:-left-8 lg:-left-12 z-30 -rotate-12">
                        <Image srcset="${christmasHat.src}" src="${christmasHat.src}" decoding="async" data-nimg="1" class="w-16 md:w-24 lg:w-32" loading="lazy" alt="christmasHat" />
                    </div>
                `;
            }

            if (!embeddingSnow) {
                const embRand = (a: number, b: number) => {
                    return Math.floor(Math.random() * (b - a + 1)) + a;
                }

                let embCSS = `
                        .embedding-snow {
                            position: absolute;
                            width: 10px;
                            height: 10px;
                            border-radius: 50%;
                            margin-top: -10px
                        }
                    `;

                let embHTML = "";

                const particleNumber = particleNumberByMonthPosition[months.indexOf(month)];

                for (let i = 0; i < particleNumber; i++) {
                    embHTML += `<i class="embedding-snow ${snowClassBGColors}"></i>`;

                    const rndX = parseFloat(
                        (embRand(0, 1000000) * 0.0001).toFixed(2),
                    );
                    const rndO = parseFloat(
                        (embRand(-100000, 100000) * 0.0001).toFixed(2),
                    );
                    const rndT = parseFloat((embRand(3, 8) * 10).toFixed(2));
                    const rndS = parseFloat((embRand(0, 10000) * 0.0001).toFixed(2));

                    embCSS += `
                            .embedding-snow:nth-child(${i}) {
                                opacity: ${(embRand(1, 10000) * 0.0001).toFixed(2)};
                                transform: translate(${rndX}vw, -10px) scale(${rndS});
                                animation: fall-${i} ${embRand(10, 30)}s -${embRand(0, 30)}s linear infinite;
                            }
        
                            @keyframes fall-${i} {
                                ${rndT}% {
                                    transform:translate(${rndX + rndO}vw, ${rndT}vh) scale(${rndS});
                                }
                                to {
                                    transform:translate(${rndX + rndO / 2}vw, 105vh) scale(${rndS});
                                }
                            }
                        `;
                }

                embeddingSnow = document.createElement("div");

                embeddingSnow.id = "embedding--snow";
                embeddingSnow.innerHTML = `
                        <style>
                            #embedding--snow {
                                position: fixed;
                                left: 0;
                                top: 0;
                                bottom: 0;
                                width: 100vw;
                                height: 100vh;
                                overflow: hidden;
                                z-index: 9999999;
                                pointer-events: none;
                            }
                            
                            ${embCSS}
                        </style>
        
                        ${embHTML}
                    `;

                document.body.appendChild(embeddingSnow);
            }
        };

        if (months.includes(month)) snowPage(month);
    }, [props]);

    return <></>;
}