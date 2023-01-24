import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [
    {
      "source": {
        "id": null,
        "name": "Medium"
      },
      "author": "Brian Chambers",
      "title": "Chick Fil A's Edge Enterprise Architecture",
      "description": "Since then, we have completed a chain-wide deployment and run it in production for almost 4 years. Every Chick-fil-A restaurant has an Edge Compute cluster running Kubernetes. We also run a…",
      "url": "https://medium.com/chick-fil-atech/enterprise-restaurant-compute-f5e2fd63d20f",
      "urlToImage": "https://miro.medium.com/max/874/1*NCgz1uid4hdcmwSVJV7J7g.png",
      "publishedAt": "2023-01-12T04:54:36Z",
      "content": "Enterprise Restaurant Compute\r\nby the CFA Enterprise Restaurant Compute Team\r\nThe last time we talked publicly about our Edge Kubernetes deployment was summer of 2018.\r\nSince then, we have completed … [+16723 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sacra.com"
      },
      "author": null,
      "title": "Docker 2.0 went from $11M to $135M in 2 years",
      "description": "Hey everyone!    Sign up to our email list for more weekly private market insights. [docker-plg-pivot] TL;DR: Just 2 years after laying off 80% of their team and being left for dead, we estimate Docker is now at $135M+ ARR growing roughly 150% YoY—and rebui…",
      "url": "https://sacra.com/p/docker-plg-pivot/",
      "urlToImage": "https://images.prismic.io/sacra/eeedf29e-291d-4904-bd74-82e22ee5ee7a_Docker+TCT+header.jpg?auto=compress,format",
      "publishedAt": "2023-01-13T18:49:42Z",
      "content": "Hey everyone!  \r\nTL;DR: Just 2 years after laying off 80% of their team and being left for dead, we estimate Docker is now at $135M+ ARR growing roughly 150% YoYand rebuilding Docker 2.0 as a bottom-… [+6521 chars]"
    },
    {
      "source": {
        "id": "hacker-news",
        "name": "Hacker News"
      },
      "author": null,
      "title": "Lago (YC S21), open source usage based billing, is hiring a cloud engineer",
      "description": "The team and your role\nWe're a team of 10 today, and we're all about Product and Tech. We're the fastest growing open-source repository that focuses on billing today: whether you need subscription, metering, usage-based pricing or all the hybrids in between f…",
      "url": "https://www.ycombinator.com/companies/lago/jobs/kDbtSIO-cloud-engineer",
      "urlToImage": "https://bookface-images.s3.amazonaws.com/logos/c7f269ebedf856c1376e276763752778387bf7ed.png?1619965181",
      "publishedAt": "2023-01-20T12:02:01Z",
      "content": "We're the open-source billing API for usage-based, subscription-based, and all the nuances of pricing in between.\r\nWith Lago, you can make your billing fit your pricing and business workflows, not th… [+2637 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Shyim.me"
      },
      "author": "Shyim",
      "title": "Devenv: Compose a Developer Environment Easily for PHP with Nix",
      "description": "I have been using Nix for almost four years and also maintaining some packages at nixpkgs (the primary Nix repository). The Nix learning curve is complicated, so I could not get my colleagues into it. But Devenv made it so easy to compose a developer environm…",
      "url": "https://shyim.me/blog/devenv-compose-developer-environment-for-php-with-nix/",
      "urlToImage": "https://avatars.githubusercontent.com/u/6224096?v=4?s=400",
      "publishedAt": "2022-12-25T19:53:19Z",
      "content": "I have been using Nix for almost four years and also maintaining some packages at nixpkgs (the primary Nix repository). The Nix learning curve is complicated, so I could not get my colleagues into it… [+10128 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Github.io"
      },
      "author": null,
      "title": "Writing an IaC Rosetta Stone",
      "description": "I wrote three reusable infrastructure as code libraries to develop high-level abstractions for deploying containerized web apps on AWS ECS. This article will provide an overview of my experience working with CDK, Terraform and Pulumi and will cover how I use …",
      "url": "https://briancaffey.github.io/2023/01/07/i-deployed-the-same-containerized-serverless-django-app-with-aws-cdk-terraform-and-pulumi/",
      "urlToImage": "https://briancaffey.github.io/static/iac_rosetta_stone_og_image.png",
      "publishedAt": "2023-01-09T05:42:17Z",
      "content": "tl;dr\r\nI wrote three infrastructure as code libraries for deploying containerized 3-tier web apps on AWS ECS Fargate using CDK, Terraform and Pulumi. This article will provide an overview of my exper… [+52753 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Azul.com"
      },
      "author": "Frank Delporte",
      "title": "What should I know about garbage collection as a Java developer?",
      "description": "What should I know about Garbage Collection as a Java developer? Let's talk to some experts at Azul to gain more insight.",
      "url": "https://www.azul.com/blog/what-should-i-know-about-garbage-collection-as-a-java-developer/",
      "urlToImage": "https://www.azul.com/wp-content/uploads/2022-Nov-Performance-GarbageCollection-hero.jpg",
      "publishedAt": "2023-01-10T05:38:20Z",
      "content": "The Garbage Collector is a crucial part of the Java Virtual Machine (JVM) that has an impact on the performance and reliability of your application. But what is it exactly, and why is it important to… [+18879 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Samcurry.net"
      },
      "author": "samwcyo",
      "title": "Web hackers vs. the auto industry",
      "description": "During the fall of 2022, a few friends and I took a road trip from Chicago, IL to Washington, DC to attend a cybersecurity conference and (try) to take a break from our usual computer work. While we were visiting the University of Maryland, we came across a f…",
      "url": "https://samcurry.net/web-hackers-vs-the-auto-industry/",
      "urlToImage": "https://i.imgur.com/o2WUB2y.png",
      "publishedAt": "2023-01-03T11:07:11Z",
      "content": "During the fall of 2022, a few friends and I took a road trip from Chicago, IL to Washington, DC to attend a cybersecurity conference and (try) to take a break from our usual computer work.\r\nWhile we… [+38688 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Alexandra Kleijn",
      "title": "heise-Angebot: iX-Workshop: DevSecOps – Automatisierte Sicherheitstests für Webanwendungen",
      "description": "DevOps-Prozesse auf Anwendungsebene um automatisierte Sicherheitsprüfungen ergänzen. Ein praxisorientierter Workshop am 22. und 23.2. 10% Rabatt bis 24.1.",
      "url": "https://www.heise.de/news/iX-Workshop-DevSecOps-Automatisierte-Sicherheitstests-fuer-Webanwendungen-7454294.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/7/6/9/0/2/MicrosoftTeams-image-9c5d602de4aa2345.png",
      "publishedAt": "2023-01-11T11:00:00Z",
      "content": "Auch im DevOps-Kontext sollte man Sicherheit als integralen Bestandteil mitdenken. In diesem Kontext hat sich der Begriff DevSecOps etabliert. Im online iX-Workshop DevSecOps: Automatisierte Sicherhe… [+1083 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Jonas Hecht",
      "title": "heise+ | Crossplane: GitOps für die Multi-Cloud",
      "description": "Crossplane provisioniert deklarativ jegliche Ressource in jedweder Umgebung – auch Cloud-übergreifend. Möglich macht dies die Kubernetes-API. Ein Einstieg.",
      "url": "https://www.heise.de/ratgeber/Crossplane-GitOps-fuer-die-Multi-Cloud-7456153.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/7/7/8/9/2/crossplane-5d29b298fe022d71.png",
      "publishedAt": "2023-01-20T12:00:00Z",
      "content": "Inhaltsverzeichnis\r\nMehr zu Kubernetes, DevOps und CI/CD\r\nDie deklarative Beschreibung von Infrastruktur mithilfe von Infrastructure-as-Code-Werkzeugen hat sich durchgesetzt, der Markt scheint bereit… [+2001 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Maika Möbus",
      "title": "heise-Angebot: enterJS Web-Performance Day: Zwei-Tages-Workshops bieten praktische Einsichten",
      "description": "Wie gelingt die Performance-Steigerung von Angular- und JavaScript-Anwendungen? Das zeigen die Online-Konferenz am 15. Februar und zwei vorgelagerte Workshops.",
      "url": "https://www.heise.de/news/enterJS-Web-Performance-Day-Zwei-Tages-Workshops-bieten-praktische-Einsichten-7452677.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/7/6/0/2/1/enterJSWPD23-6bf30f4521c77fbf.png",
      "publishedAt": "2023-01-09T13:07:00Z",
      "content": "Inhaltsverzeichnis\r\nDer enterJS Web-Performance Day findet am 15. Februar 2023 online statt. Dort zeigen Expertinnen und Experten, wie sich langsame Webanwendungen beschleunigen lassen. Die Veranstal… [+2964 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Matthias Parbel",
      "title": "heise-Angebot: CloudLand 2023: Letzter Aufruf zum aktiven Mitmachen beim Cloud Native Festival",
      "description": "Barcamp und interaktive Formate – beim Call for Participation können sich Interessierte noch bis 31. Januar für die aktive CloudLand-Teilnahme bewerben.",
      "url": "https://www.heise.de/news/CloudLand-2023-Letzter-Aufruf-zum-aktiven-Mitmachen-beim-Cloud-Native-Festival-7465574.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/2/9/6/5/2023_CloudLand_Banner_1920x1080px-_HG_fA__771__r_Speaker-9275f0e0fb500f33.jpg",
      "publishedAt": "2023-01-20T13:30:00Z",
      "content": "Das Cloud Native Festival von der Community für die Community lädt auch 2023 wieder zum Mitmachen ein. Nach der erfolgreichen Premiere im Phantasialand bei Brühl im vergangenen Jahr haben die Initiat… [+2902 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Vladimir Poliakov",
      "title": "Buchbesprechung: Cloud Native Infrastructure with Azure",
      "description": "\"Warum auf Cloud Native umstellen?\" Das Buch liefert die Antwort und zeigt, wie sich mit Azure eine CNCF-konforme Cloud-native Infrastruktur einrichten lässt.",
      "url": "https://www.heise.de/hintergrund/Buchbesprechung-Cloud-Native-Infrastructure-with-Azure-7441981.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/7/0/3/1/4/shutterstock_1928082863-4c7b8471cf19c749.jpg",
      "publishedAt": "2022-12-23T12:12:00Z",
      "content": "Inhaltsverzeichnis\r\nBuchbesprechung\r\nNishant Singh und Michael KehoeCloud Native Infrastructure with AzureOReilly Media, 2022350 Seiten, ab ca. 40 (Buch, eBook) ISBN: 978-1-492-09096-0\r\nIst die Cloud… [+3279 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Zac Hall",
      "title": "When is Apple Music Classical launching?",
      "description": "It’s been 16 months since Apple purchased the three-year-old classical music streaming service Primephonic. Meanwhile, there are only a few days left for Apple Music to meet its plan of launching a stand-alone Apple Classical app that replaces the discontinue…",
      "url": "https://9to5mac.com/2022/12/28/primephonic-x-apple-music-where-are-they-now-and-where-is-apple-classical/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/Apple-Music-Classical.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-12-28T20:00:00Z",
      "content": "Its been 16 months since Apple purchased the three-year-old classical music streaming service Primephonic. Meanwhile, there are only a few days left for Apple Music to meet its plan of launching a st… [+7335 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Genbeta.com"
      },
      "author": "Bárbara Bécares",
      "title": "LinkedIn desvela los 25 trabajos con más oportunidades laborales en España: una lista ideal si no sabes por dónde tirar",
      "description": "LinkedIn ha identificado cuáles son los puestos de trabajo con más oportunidades en España en lo que ha bautizado como su lista Empleos en Auge 2023 y donde encontramos los puestos de trabajo que más han crecido en los últimos cinco años y cuáles se presentan…",
      "url": "https://www.genbeta.com/actualidad/linkedin-desvela-25-trabajos-oportunidades-laborales-espana-lista-ideal-no-sabes-donde-tirar",
      "urlToImage": "https://i.blogs.es/767e49/jason-goodman-bzqu01v-g54-unsplash/840_560.jpg",
      "publishedAt": "2023-01-18T12:13:30Z",
      "content": "LinkedIn ha identificado cuáles son los puestos de trabajo con más oportunidades en España en lo que ha bautizado como su lista Empleos en Auge 2023 y donde encontramos los puestos de trabajo que más… [+2839 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Toprankblog.com"
      },
      "author": "Lee Odden",
      "title": "25 Women Who Rocked as B2B Industry Influencers in 2022",
      "description": "Over the past few years aka \"the Covid years\" the role of influence in B2B marketing has grown significantly. Our 2022 research report, The State of B2B Influencer Marketing, reported that 85% of B2B marketers believe that interest in working with influencers…",
      "url": "https://www.toprankblog.com/2022/12/25-women-b2b-influencers-22/",
      "urlToImage": "https://www.toprankblog.com/wp-content/uploads/25-women-b2b-influencers-2022-600w.jpg",
      "publishedAt": "2022-12-29T12:15:54Z",
      "content": "Over the past few years aka “the Covid years” the role of influence in B2B marketing has grown significantly. Our 2022 research report, The State of B2B Influencer Marketing, reported that 85% of B2B… [+12154 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MakeUseOf"
      },
      "author": "Mwiza Kumwenda",
      "title": "The 6 Best Automation and Orchestration Tools for Linux",
      "description": "Managing and coordinating multiple Linux machines can be hard. But not if you have got these automation and orchestration tools installed.",
      "url": "https://www.makeuseof.com/best-automation-and-orchestration-tools-linux/",
      "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/01/pexels-christina-morillo-1181354-1.jpg",
      "publishedAt": "2023-01-16T20:30:16Z",
      "content": "Whether you have a few PCs or a large IT infrastructure, orchestration and automation tools can help you bring in a lot of efficiencies and enable you to simplify the management of complex tasks and … [+6568 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Theregister.com"
      },
      "author": "Liam Proven",
      "title": "Fancy climbing into ALP over New Year's? Fresh preview versions of SUSE's distro and NetBSD 10 are here",
      "description": "Ideal if you're looking for something to play with over the holidays\nAs the end of the year and the holiday season both approach, so do new previews of both SUSE's new enterprise Linux distro, ALP, and the NetBSD OS.…",
      "url": "https://www.theregister.com/2022/12/23/new_preview_versions_of_suses/",
      "urlToImage": "https://regmedia.co.uk/2022/12/22/netbsd-10-beta.jpg",
      "publishedAt": "2022-12-23T16:00:14Z",
      "content": "As the end of the year and the holiday season both approach, so do new previews of both SUSE's new enterprise Linux distro, ALP, and the NetBSD OS.\r\nIt's been a few months since Les Droites, the firs… [+4589 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Habr.com"
      },
      "author": "Anna_sokol22",
      "title": "[Перевод] Ansible: 30 самых важных модулей для DevOps-профессионалов (часть 3)",
      "description": "В первой части этой серии мы обсудили модули проверки подключения, установки некоторых пакетов и выполнения ряда команд на целевых узлах. Во второй части изучили различные модули, используемые для обработки файлов, управляющие файлами на целевых узлах.В этой …",
      "url": "https://habr.com/ru/company/southbridge/blog/709860/#post-content-body",
      "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/b06/66c/c42/b0666cc42fd2e220f0c5cef27b0cbaab.png",
      "publishedAt": "2023-01-10T11:37:01Z",
      "content": ", . , , .\r\n , ( service), ( user group), cron ( cron), ( debug) , ( include_vars include_role).\r\n service \r\n service , /// . Windows win_service. \r\n---\r\n- name: service module\r\n hosts: all\r\n tasks:\r\n… [+3390 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Internet"
      },
      "author": "info@thehackernews.com (The Hacker News)",
      "title": "CircleCI Urges Customers to Rotate Secrets Following Security Incident",
      "description": "DevOps platform CircleCI on Wednesday urged its customers to rotate all their secrets following an unspecified security incident.\nThe company said an investigation is currently ongoing, but emphasized that \"there are no unauthorized actors active in our syste…",
      "url": "https://thehackernews.com/2023/01/circleci-urges-customers-to-rotate.html",
      "urlToImage": "https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEg73dD53DvAIP6CYDXx16lutS7UBvudTZV7kJE7PyapXl7QAawMunvJCPYstf4N6yjelnXLSm2TWzajeVJ4bxX3fRME-fWMm9IG9J4lOgJDjnX1MjzHpuLhvrSZ_vHgvRjkpWehDXL56AmqOAmLNdasSOTCeCJYaAp7QTnT_ff5BvVLWVjzH6utpbt_/s728-rj-e3650/breach.png",
      "publishedAt": "2023-01-05T09:12:00Z",
      "content": "DevOps platform CircleCI on Wednesday urged its customers to rotate all their secrets following an unspecified security incident.\r\nThe company said an investigation is currently ongoing, but emphasiz… [+2559 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Wwwhatsnew.com"
      },
      "author": "Invitado",
      "title": "7 enfoques de la Inteligencia Artificial",
      "description": "La Inteligencia Artificial (IA) se ha convertido en tendencia para las empresas. Varios ejecutivos “c-level” están reportando avances en sus compañías debido a la aplicación de IA en sus unidades de negocio. Sin embargo, la IA cubre un amplio espectro de enfo…",
      "url": "https://wwwhatsnew.com/2023/01/11/7-enfoques-de-ia/",
      "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2023/01/inteligencia-artificial.webp",
      "publishedAt": "2023-01-11T09:34:36Z",
      "content": "La Inteligencia Artificial (IA) se ha convertido en tendencia para las empresas. Varios ejecutivos c-level están reportando avances en sus compañías debido a la aplicación de IA en sus unidades de ne… [+5097 chars]"
    },
    {
      "source": {
        "id": "lenta",
        "name": "Lenta"
      },
      "author": "Мария Грушко",
      "title": "Названы самые высокооплачиваемые вакансии в России",
      "description": "В январе самыми выгодными предложениями на рынке труда в крупнейших городах России стали вакансии стоматологов. В Москве, Новосибирске и Красноярске соискателям предлагают от 300 тысяч рублей в месяц, в Санкт-Петербурге стоматологу-ортопеду готовы выплачивать…",
      "url": "https://lenta.ru/news/2023/01/17/wannamoney/",
      "urlToImage": "https://icdn.lenta.ru/images/2023/01/17/12/20230117124550962/share_c1940416f540bbb1013fa1fc9d2d02d5.jpg",
      "publishedAt": "2023-01-17T10:22:46Z",
      "content": ". SuperJob.\r\n, 300 , - - 200 , - 150 . .\r\n IT, , , , - . , () -5 . DevOps Engineer 210 , - - 200 , 1 150 160 .\r\n - . , , -, , -.\r\n SuperJob, 2022 - . « , », ."
    },
    {
      "source": {
        "id": null,
        "name": "Itmedia.co.jp"
      },
      "author": "＠IT",
      "title": "DevOpsにおける3つのアンチパターンと対処法とは",
      "description": "GitHubは公式ブログで、DevOpsのよくあるアンチパターンとして「活動を広く展開できないチーム体制」「不十分なシフトレフト」「ツールの進化に組織が追い付いていない」の3つを取り上げ、どうそれらを克服すればよいのかを解説した。",
      "url": "https://atmarkit.itmedia.co.jp/ait/articles/2301/24/news038.html",
      "urlToImage": "https://image.itmedia.co.jp/images/logo/1200x630_500x500_ait.gif",
      "publishedAt": "2023-01-23T23:00:00Z",
      "content": "GitHub2023117DevOps3\r\nDevOps\r\nGitHub3\r\n1\r\nCopyright © ITmedia, Inc. All Rights Reserved."
    },
    {
      "source": {
        "id": null,
        "name": "Itmedia.co.jp"
      },
      "author": "山市良，テクニカルライター",
      "title": "ベースOSイメージのサイズ最適化は、Windowsアプリのコンテナ化を後押しするか？",
      "description": "アプリの「コンテナ化（Containerized）」は、クラウドネイティブで、スケーラブルなアプリの開発／実行を可能にし、「DevOps」や「CI/CD」を実現します。現在のWindowsはアプリのコンテナ化に対応していますが、その巨大なイメージサイズが大きな課題となっていました。2023年1月提供のベースOSイメージでは、イメージサイズの大幅な最適化が行われました。",
      "url": "https://atmarkit.itmedia.co.jp/ait/articles/2301/23/news010.html",
      "urlToImage": "https://image.itmedia.co.jp/ait/articles/2301/23/l_vol187_screen01.png",
      "publishedAt": "2023-01-23T20:00:00Z",
      "content": "Microsoft Azure\r\nWindows\r\nDockerOS\r\nWindowsWindows Server 2016DockerDocker EEKubernetesWindowsKubernetesMirantis Container RuntimeMCRDocker EEDocker EnterpriseContainerdWindows Server 2019Windows\r\nMi… [+334 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "newsfeedback@fool.com (Adam Spatacco)",
      "title": "After a Brutal 2022, Is Time Up for Palantir Stock?",
      "description": "Some on Wall Street aren't so bullish on Palantir stock for 2023.",
      "url": "https://www.fool.com/investing/2023/01/20/after-a-brutal-2022-is-time-up-for-palantir-stock/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/716875/business-people-discussing-project-on-digital-tablet.jpg",
      "publishedAt": "2023-01-20T13:20:00Z",
      "content": "After two decades of staying privately held, big-data analytics company Palantir Technologies(PLTR -2.46%) went public in Sept. 2020. The stock quickly rose as popular technology investor Cathie Wood… [+4325 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Mckinsey.com"
      },
      "author": null,
      "title": "Women in tech: The best bet to solve Europe’s talent shortage",
      "description": "To remain competitive in technological growth and innovation, Europe must recruit and retain women for the fastest-growing tech roles of the foreseeable future.",
      "url": "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/women-in-tech-the-best-bet-to-solve-europes-talent-shortage",
      "urlToImage": "https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/women%20in%20tech%20the%20best%20bet%20to%20solve%20europes%20talent%20shortage/thumb-gettyimages-666009304.jpg",
      "publishedAt": "2023-01-24T00:00:00Z",
      "content": "European leaders looking to build competitive advantage and growth by addressing their technology gap should consider one fact: women1The data available for this study did not measure whether the car… [+16622 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Mckinsey.com"
      },
      "author": null,
      "title": "Clearing data-quality roadblocks: Unlocking AI in manufacturing",
      "description": "An agile, data-centric approach can help clean and enrich data needed for machine learning. To move forward, manufacturers need to set up the right teams with the right tools.",
      "url": "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/clearing-data-quality-roadblocks-unlocking-ai-in-manufacturing",
      "urlToImage": "https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/clearing%20data%20quality%20roadblocks%20unlocking%20ai%20in%20manufacturing/clearing-data-1280385511-ca-thumb-1536x1536.jpg",
      "publishedAt": "2023-01-20T00:00:00Z",
      "content": "Today, manufacturers collect information from an ever-broadening network of sources. Whether its time-series data from traditional physical sensors, real-time video streams, or unstructured and manua… [+15976 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Github.blog"
      },
      "author": "Mark Paulsen",
      "title": "3 common DevOps antipatterns and cloud native strategies that can help",
      "description": "Explore how GitHub and cloud native strategies can help you address common DevOps pipeline and team antipatterns.",
      "url": "https://github.blog/2023-01-17-3-common-devops-antipatterns-and-cloud-native-strategies-that-can-help/",
      "urlToImage": "https://github.blog/wp-content/uploads/2023/01/1200x640.png?fit=1200%2C640",
      "publishedAt": "2023-01-13T21:44:18Z",
      "content": "When implemented well, DevOps practices can transform how application teams deliver business value. However, the use of antipatterns can lead to disappointing results.\nAntipatterns are when teams foc… [+8547 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Github.blog"
      },
      "author": "Ashok Kirla",
      "title": "Introducing required workflows and configuration variables to GitHub Actions",
      "description": "Now, you can standardize and enforce CI/CD best practices across all repositories in your organization to reduce duplication and secure your DevOps processes.",
      "url": "https://github.blog/2023-01-10-introducing-required-workflows-and-configuration-variables-to-github-actions/",
      "urlToImage": "https://github.blog/wp-content/uploads/2021/11/GitHub-Actions_social.png",
      "publishedAt": "2023-01-10T19:37:32Z",
      "content": "Now, you can standardize and enforce CI/CD best practices across all repositories in your organization to reduce duplication and secure your DevOps processes.\r\nToday, we are introducing two new featu… [+2725 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nextpit.de"
      },
      "author": "Jobbio",
      "title": "So schlagt Ihr die KI-Einstellungsroboter im Jahr 2023",
      "description": "Im Jahr 2023 setzen immer mehr Personalvermittler KI in ihrem Einstellungsprozess ein. Hier erfahrt Ihr, wie Ihr die Jobsuche entsprechend optimiert.(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
      "url": "https://www.nextpit.de/optimiere-deine-jobsuche-fuers-ki-hiring",
      "urlToImage": "https://fscl01.fonpit.de/userfiles/7446224/image/jobbio-ai-jobs2.jpg",
      "publishedAt": "2023-01-20T12:45:08Z",
      "content": "Abgesehen von den üblichen Versprechen an sich selbst, an der Gesundheit und der Fitness zu arbeiten, steht bei vielen Neujahrsvorsätzen die Arbeit im Mittelpunkt. Egal, ob Ihr befördert werden möcht… [+6481 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Howtoforge.com"
      },
      "author": "Arvid L",
      "title": "How to Set up Teleport Cluster on Rocky Linux 9",
      "description": "Teleport is an open-source that can be used as an access plane for your global infrastructure. It provides zero-trust access to a variety of services such as servers, Kubernetes clusters, database servers, DevOps applications like AWS Management Console, CI/C…",
      "url": "https://www.howtoforge.com/how-to-set-up-teleport-cluster-on-rocky-linux-9/",
      "urlToImage": "https://www.howtoforge.com/images/featured/rocky-linux-teleport-server.png",
      "publishedAt": "2023-01-13T15:12:20Z",
      "content": "Teleport is an open-source that can be used as an access plane for your global infrastructure. It provides zero-trust access to a variety of services such as servers, Kubernetes clusters, database se… [+21632 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nextpit.de"
      },
      "author": "Jobbio",
      "title": "So bekommt Ihr mehr Geld für die gleiche Arbeit im Jahr 2023",
      "description": "Würdet Ihr gerne mehr Geld verdienen? Unser Partner Jobbio verrät Euch mehrere Möglichkeiten, wie Ihr im Jahr 2023 ein besseres Gehalt erzielen könnt.(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
      "url": "https://www.nextpit.de/mehr-geld-fuer-die-gleiche-arbeit-in-2023",
      "urlToImage": "https://fscl01.fonpit.de/userfiles/7446224/image/jobbio-earnings.jpg",
      "publishedAt": "2022-12-23T11:40:52Z",
      "content": "Infolgedessen würde jeder gerne mehr Geld verdienen. Aber lehnt Ihr Euch passiv zurück und wartet auf eine Gehaltserhöhung, oder ergreift Ihr die Initiative und holt sie Euch?\r\nWährend die Unternehme… [+5191 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Linuxtoday.com"
      },
      "author": "Web Webster",
      "title": "How to Transition From Linux Admin to Linux DevOps Role",
      "description": "Linux DevOps involves using Linux-based systems and tools to build, deploy, and manage applications. Here’s how to transition into this role.\nThe post How to Transition From Linux Admin to Linux DevOps Role appeared first on Linux Today.",
      "url": "https://www.linuxtoday.com/developer/how-to-transition-linux-admin-linux-devops-role/",
      "urlToImage": "https://www.linuxtoday.com/wp-content/uploads/2021/07/Linux_opengraph_square2-01.png",
      "publishedAt": "2023-01-13T15:00:23Z",
      "content": "Advertiser Disclosure: Some of the products that appear on this site are from companies from which TechnologyAdvice receives compensation. This compensation may impact how and where products appear o… [+169 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Designmodo.com"
      },
      "author": "Nataly Birch",
      "title": "Best Pingdom Alternatives in 2023",
      "description": "This post is originally published on Designmodo: Best Pingdom Alternatives in 2023\n\nStarted as a small project in 2005 in Sweden, today Pingdom is an internationally-used, US-based product that is a top-rated web speed test tool among web developers. However,…",
      "url": "https://designmodo.com/pingdom-alternatives/",
      "urlToImage": "https://designmodo.com/wp-content/uploads/2023/01/pingdom-658596-preview.jpg",
      "publishedAt": "2023-01-16T09:45:25Z",
      "content": "ToolsNataly BirchJanuary 16, 2023 7 minutes READ \r\nStarted as a small project in 2005 in Sweden, today Pingdom is an internationally-used, US-based product that is a top-rated web speed test tool amo… [+10608 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Slava Podmurnyi, Forbes Councils Member, \n Slava Podmurnyi, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/slavapodmurnyi/",
      "title": "Four DevOps Best Practices For IT Infrastructure Optimization To Build Business Resilience",
      "description": "As a result of making your IT infrastructure changes, your business and its IT ecosystem, in general, become more flexible, highly secure and cost-efficient.",
      "url": "https://www.forbes.com/sites/forbestechcouncil/2023/01/10/four-devops-best-practices-for-it-infrastructure-optimization-to-build-business-resilience/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/5f906dee83f10f5c438e3e03/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2023-01-10T12:15:00Z",
      "content": "Entrepreneur, Technology Evangelist, Business Strategist. CEO &amp; Cofounder of Visartech Inc., Software Product Development Agency.\r\ngetty\r\nImagine youre driving along the 8-lane highway, but its l… [+4701 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Adrian Bridgwater, Senior Contributor, \n Adrian Bridgwater, Senior Contributor\n https://www.forbes.com/sites/adrianbridgwater/",
      "title": "Levelling Up Time For IT Platform Teams",
      "description": "Platform engineering is the IT discipline of designing & building self-service capabilities to minimize cognitive load for developers and to enable the fast-flow software delivery.",
      "url": "https://www.forbes.com/sites/adrianbridgwater/2023/01/20/levelling-up-time-for-it-platform-teams/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63ca7b650b28579fa6922d82/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2023-01-20T11:36:36Z",
      "content": "PRODUCTION - 30 March 2022, Baden-Wuerttemberg, Rottweil: Stacked wooden pallets lies in a steel ... [+] shop. Photo: Silas Stein/dpa (Photo by Silas Stein/picture alliance via Getty Images)\r\ndpa/pic… [+7218 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Lokesh Anand, Forbes Councils Member, \n Lokesh Anand, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/lokeshanand/",
      "title": "Four Ways DataOps Can Help Your Organization Build Trust And Make Faster Decisions",
      "description": "DataOps is a continuous improvement process, and it’s important to regularly monitor and measure the performance of your data pipelines and processes.",
      "url": "https://www.forbes.com/sites/forbestechcouncil/2023/01/19/four-ways-dataops-can-help-your-organization-build-trust-and-make-faster-decisions/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/5f6b8b10fc4839cedc3fe5ba/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2023-01-19T12:45:00Z",
      "content": "Lokesh is the Co-founder and CEO of Sigmoid, a leading data solutions company. He is a visionary and thought-leader in the industry.\r\ngetty\r\nFrom delivering personalized customer experiences and opti… [+6639 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Gregory Webb, Forbes Councils Member, \n Gregory Webb, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/gregorywebb1/",
      "title": "How Application Services Orchestration Can Help With Organizational Alignment",
      "description": "Maintaining applications, ensuring constant availability and mitigating inevitable security vulnerabilities is a daunting task.",
      "url": "https://www.forbes.com/sites/forbestechcouncil/2023/01/05/how-application-services-orchestration-can-help-with-organizational-alignment/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6149e72b9645b40a12871e47/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2023-01-05T13:30:00Z",
      "content": "Gregory Webb is the CEO of AppViewX, a cybersecurity and IT infrastructure automation platform enabling digital transformation.\r\ngetty\r\nRapid technology innovation continues to set the pace for the g… [+5989 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Diane Brady, Forbes Staff, \n Diane Brady, Forbes Staff\n https://www.forbes.com/sites/dianebrady/",
      "title": "CIO Insights: Work-Bench’s Jonathan Lehr And Team On Enterprise Tech Trends To Watch",
      "description": "Work-Bench Cofounder and General Partner Jon Lehr and team share their thoughts on  enterprise tech trends to watch in 2023",
      "url": "https://www.forbes.com/sites/dianebrady/2022/12/28/cio-insights-work-benchs-jonathan-lehr-and-team-on-enterprise-tech-trends-to-watch/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63accec8da8efc005e1d7c6d/0x0.jpg?format=jpg&crop=738,492,x67,y0,safe&width=1200",
      "publishedAt": "2022-12-28T23:54:27Z",
      "content": "Work-Bench Cofounder and General Partner Jonathan Lehr \r\nCourtesy of Work-Bench\r\nI first met Jonathan Lehr shortly after he and Jessica Lin cofounded Work-Bench almost a decade ago to help early-stag… [+4549 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Yoran Sirkis, Forbes Councils Member, \n Yoran Sirkis, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/yoransirkis/",
      "title": "Budget Cuts Don’t Have To Come At The Expense Of Cyber Remediation",
      "description": "Whether budgets contract or expand, cybersecurity threats are still on the rise, and organizations need a new approach to improving their cyber stance.",
      "url": "https://www.forbes.com/sites/forbestechcouncil/2022/12/28/budget-cuts-dont-have-to-come-at-the-expense-of-cyber-remediation/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/627d0d1e1e7516cbb623ad21/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2022-12-28T11:30:00Z",
      "content": "Yoran Sirkis is CEO and cofounder of Seemplicitya risk reduction and productivity platform for modern security teams. \r\ngetty\r\nEven as growth for the hi-tech sector seems to have slowed, the threat o… [+6441 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Manasi Vartak, Forbes Councils Member, \n Manasi Vartak, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/manasivartak/",
      "title": "Achieving Next-Level Value From AI By Focusing On The Operational Side Of Machine Learning",
      "description": "How can organizations translate their data scientists' amazing algorithms into real business impact?",
      "url": "https://www.forbes.com/sites/forbestechcouncil/2023/01/17/achieving-next-level-value-from-ai-by-focusing-on-the-operational-side-of-machine-learning/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/637390ed1b7646a9e461196b/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2023-01-17T13:15:00Z",
      "content": "Manasi Vartak is founder and CEO of Verta, a Palo Alto-based provider of solutions for Operational AI and ML Model Management.\r\ngetty\r\nTechnology research firm Gartner, Inc. has estimated that 85% of… [+6371 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Danny Allan, Forbes Councils Member, \n Danny Allan, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/dannyallan/",
      "title": "Are Superclouds Ready To Go Mainstream?",
      "description": "The concept is gathering momentum.",
      "url": "https://www.forbes.com/sites/forbestechcouncil/2023/01/19/are-superclouds-ready-to-go-mainstream/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63c7eed495ce35fb0e50c4ae/0x0.jpg?format=jpg&crop=1946,1094,x0,y31,safe&width=1200",
      "publishedAt": "2023-01-19T11:45:00Z",
      "content": "Chief technology officer at Veeam®, a leader in backup, recovery and data management solutions that deliver modern data protection.\r\ngetty\r\nWhat would it be like if every software application plugged… [+6052 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Janakiram MSV, Senior Contributor, \n Janakiram MSV, Senior Contributor\n https://www.forbes.com/sites/janakirammsv/",
      "title": "5 Reasons Why Microsoft Azure Is The Top Choice For Running Industrial IoT Solutions",
      "description": "Last month, Gartner published the Magic Quadrant for Global Industrial IoT Platforms report. Out of the 16 companies considered for the analysis, Microsoft secured a slot in the top right quadrant as a leader in the IIoT platform segment.",
      "url": "https://www.forbes.com/sites/janakirammsv/2023/01/01/5-reasons-why-microsoft-azure-is-the-top-choice-for-running-industrial-iot-solutions/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63b19cd62c2c8c88c4828173/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2023-01-01T14:58:38Z",
      "content": "During the last decade, Microsoft has consistently invested in Azure IoT and edge technologies as part of its Intelligent Cloud and Intelligent Edge strategy. Microsoft is one of the first platform c… [+4840 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Adrian Bridgwater, Senior Contributor, \n Adrian Bridgwater, Senior Contributor\n https://www.forbes.com/sites/adrianbridgwater/",
      "title": "Mirantis Details Key Factors Behind Virtual Machine Growth",
      "description": "An instance of abstracted virtualized compute capacity described and defined to run on a cloud server in a datacenter, a virtual machine can be established to run some, all or indeed more functions than any single physical computer.",
      "url": "https://www.forbes.com/sites/adrianbridgwater/2023/01/11/mirantis-details-key-factors-behind-virtual-machine-growth/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63bea20bd9b31454f2e4e9c0/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2023-01-11T11:50:29Z",
      "content": "Gavin Menichini, using the Oculus Quest 2 VR headset, gives a demonstration of the Immersed Virtual ... [+] Reality program which can be used for many applications including virtual meetings at the I… [+5996 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Boyd Clewis, Forbes Councils Member, \n Boyd Clewis, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/boydclewis/",
      "title": "Why People Skills—Not Industry Experience—Are The Most Important Prerequisite For New Cybersecurity Hires",
      "description": "A good IT person can only make good recommendations when they understand the company's objectives and avoid working in a silo. That understanding of the big picture leads to innovation and system and process improvements.",
      "url": "https://www.forbes.com/sites/forbestechcouncil/2023/01/23/why-people-skills-not-industry-experience-are-the-most-important-prerequisite-for-new-cybersecurity-hires/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/615b299ed5a965db20218a32/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2023-01-23T14:00:00Z",
      "content": "Boyd Clewis is the co-founder of Baxter Clewis Cybersecurity. He is a CISSP, CCSK, CISA, QSA and cyber security professional.\r\ngetty\r\nWhen hiring for jobs in cybersecurity and other technical fields,… [+5456 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Shai Morag, Forbes Councils Member, \n Shai Morag, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/shaimorag/",
      "title": "Understanding The Risks And Rewards Of CNAPP",
      "description": "Before you embrace CNAPP, set your own priorities and determine what elements of cloud security are most important to you.",
      "url": "https://www.forbes.com/sites/forbestechcouncil/2023/01/23/understanding-the-risks-and-rewards-of-cnapp/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6064dbb8610333ea7f4c8408/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2023-01-23T11:15:00Z",
      "content": "CEO and cofounder of Ermetic, a provider of public cloud security technology. \r\ngetty\r\nThe benefits of the cloudand the many new challenges it has broughthave become a daily topic of conversation for… [+6340 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Aparna Dhinakaran, Contributor, \n Aparna Dhinakaran, Contributor\n https://www.forbes.com/sites/aparnadhinakaran/",
      "title": "Four Predictions For AI In 2023",
      "description": "Four predictions for the future of AI and MLOps in 2023 and a look back at an incredible year for technical breakthroughs in machine learning.",
      "url": "https://www.forbes.com/sites/aparnadhinakaran/2022/12/23/four-predictions-for-ai-in-2023/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63a236956839016e6bc9d407/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2022-12-23T19:00:00Z",
      "content": "Aparna Dhinakaran, Co-Founder &amp; Chief Product Officer at Arize AI, offers predictions for MLOps in ... [+] 2023\r\nImage by author\r\nFrom major corporations to startups to independent research labs,… [+6123 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Expert Panel®, Forbes Councils Member, \n Expert Panel®, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/expertpanel/",
      "title": "16 Reasons DevSecOps Efforts Fail (And How To Get Them Right)",
      "description": "Adopting DevSecOps isn’t a simple, single step; it requires new partnerships and processes backed by the full commitment of stakeholders.",
      "url": "https://www.forbes.com/sites/forbestechcouncil/2023/01/18/16-reasons-devsecops-efforts-fail-and-how-to-get-them-right/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63c70382e10c09a6a650c456/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2023-01-18T13:15:00Z",
      "content": "getty\r\nWith high-profile cyberattacks regularly hitting headlines, its not surprising more and more companies are embracing the DevSecOps movement. With the goal of incorporating security features an… [+8211 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Alex Konrad, Forbes Staff, \n Alex Konrad, Forbes Staff\n https://www.forbes.com/sites/alexkonrad/",
      "title": "The Most Anticipated Tech IPOs In 2023: Stripe, SpaceX Headline An Uncertain Class",
      "description": "The tech IPO market in 2022 was the worst in years. Here are the startup unicorns and dark horse plodders that investors are hoping can heat it back up, starting with Stripe.",
      "url": "https://www.forbes.com/sites/alexkonrad/2022/12/23/most-anticipated-tech-ipos-2023/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63a26f1f07486fb21736e6c3/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&width=1200",
      "publishedAt": "2023-01-02T12:00:00Z",
      "content": "Harold M. Lambert/Getty Images\r\nThe IPO market for tech companies in 2022 was the worst in many years. Here are the startup unicorns and dark horse plodders that investors are hoping can heat it back… [+9147 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Melody Brue, Contributor, \n Melody Brue, Contributor\n https://www.forbes.com/sites/moorinsights/people/melodybrue/",
      "title": "Low-Code, No-Code Aligns Business Needs With IT Strategy For Greater Workforce Productivity",
      "description": "Vice President and Principal Analyst Melody Brue dives into low and no-code platforms and their effect on the modern workforce, from business-IT alignment to equity and inclusion.",
      "url": "https://www.forbes.com/sites/moorinsights/2023/01/17/low-code-no-code-aligns-business-needs-with-it-strategy-for-greater-workforce-productivity/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63c6f23446892e4c35e9af4b/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2023-01-17T19:10:26Z",
      "content": "ID 217789283 © Ksenia Kolesnikova | Dreamstime.com\r\nNo code, no problem. Low-code, no-code platforms enable users to create software applications quickly without needing to write their own code. This… [+10655 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Patrick Moorhead, Senior Contributor, \n Patrick Moorhead, Senior Contributor\n https://www.forbes.com/sites/patrickmoorhead/",
      "title": "NI – Getting Complex Products To Market Faster",
      "description": "#1-Ranked Industry Analyst Patrick Moorhead dives in as recently the company, National Instruments, has reinvented its operating model to focus on software-defined testing systems and the addition of technologies such as data analytics and machine learning.",
      "url": "https://www.forbes.com/sites/patrickmoorhead/2023/01/18/ni--getting-complex-products-to-market-faster/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63c814d888f48a54d489b917/0x0.png?format=png&width=1200",
      "publishedAt": "2023-01-18T15:53:03Z",
      "content": "NI (formerly National Instruments), headquartered in my hometown of Austin, Texas, is a company I've been following for a long time. In 2020, National Instruments shortened its name to 'NI' along wit… [+9522 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Antyweb.pl"
      },
      "author": "Grzegorz Ułan",
      "title": "Zarobki w IT ciągle rosną. Nawet 20 tys. zł netto dla mida",
      "description": "Serwis z ogłoszeniami o pracę w branży IT - No Fluff Jobs podzielił się dziś z nami wynikami swojego rocznego raportu za 2022 rok, w temacie zarobków, na jakie mogli liczyć w ubiegłym roku specjaliści IT.\n \n The post Zarobki w IT ciągle rosną. Nawet 20 tys. z…",
      "url": "https://antyweb.pl/zarobki-w-it-2023",
      "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2023/01/tkyzkmkzvn/Depositphotos_243120806_S.jpg",
      "publishedAt": "2023-01-11T20:00:17Z",
      "content": "Zacznijmy jednak od liczby ogosze o prac w brany IT, bo to te ciekawa informacja, i cay czas ona ronie. W caym ubiegym 2022 roku opublikowano o 8% wicej ofert o prac dla specjalistów IT ni rok wczeni… [+3732 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Antyweb.pl"
      },
      "author": "Grzegorz Ułan",
      "title": "Zarobki specjalistów IT w Polsce, Czechach, Słowacji i Węgrzech. Gdzie zarobicie więcej",
      "description": "Ostatnio na Antyweb poświęcaliśmy sporo uwagi zarobkom w branży IT, ale tylko w Polsce. Wiemy jednak, iż specjaliści IT coraz chętniej rozglądają się za pracą poza granicami kraju, i dziś dzięki firmie Cpl i jej raportowi płacowemu „CEE Salary Guide 2023”, mo…",
      "url": "https://antyweb.pl/zarobki-w-it-czechy-slowacja-wegry",
      "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2023/01/jexd6gb3yk/Unsplash.jpg",
      "publishedAt": "2023-01-12T12:15:20Z",
      "content": "W raporcie tym znajdziemy obszerne zestawienie wynagrodze, obejmujce ponad 150 stanowisk z bran m.in.: SSC/BPO, finansowej, handlowej, logistycznej i marketingowej, ze szczególnym uwzgldnieniem zarob… [+2033 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Antyweb.pl"
      },
      "author": "Grzegorz Ułan",
      "title": "Oferty pracy a realne zarobki - zapytano 3 tys. specjalistów IT, ile naprawdę zarabiają",
      "description": "Pewnie jesteście już zmęczeni raportami z zarobków w branży IT, przygotowanymi tylko na podstawie ogłoszeń o pracę dla specjalistów IT. Portal Just Join IT postanowił więc nieco urozmaicić Wam ten obszar, dodatkowymi danymi z realnych ich zarobków.\n \n The pos…",
      "url": "https://antyweb.pl/realne-zarobki-w-branzy-it",
      "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2023/01/bkouk93a8s/Depositphotos_356460932_S.jpg",
      "publishedAt": "2023-01-19T12:00:38Z",
      "content": "Dla porzdku jednak, zerknijmy na pocztek chocia na te ogólne dane z ogosze na portalu Just Join IT, zamieszczonych w caym 2022 roku.\r\nPorównujc zarobki w ubiegym roku z tymi oferowanymi w 2021 roku, … [+1724 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cool3c.com"
      },
      "author": "Chevelle.fu",
      "title": "CES 2023 ：高通推出同步支援數位駕駛艙與先進輔助駕駛的 Snapdragon Ride Flex SoC 可擴充平台",
      "description": "也許是受到 NVIDIA 宣布新一代自駕平台 DRIVE Thor 將能藉單一平台提供運算、多媒體與 Level 4 等級自動駕駛的影響，高通在 2023 CES 公布 Snapdragon Ride Flex SoC 可擴充平台，也強調能以單一硬體平台同時支援數位駕駛艙與先進輔助駕駛。 Snapdragon Ride Flex SoC 已經開始提供樣品，預計 2024 年正式量產 ▲ Snapdragon Ride Flex SoC 能以單一 SoC 滿足數位駕駛艙、先進輔助駕駛與自動駕駛功能需求 高通強調， …",
      "url": "https://www.cool3c.com/article/187614",
      "urlToImage": "https://sw.cool3c.com/user/29442/2023/10cbd553-d92d-40a7-a145-61cef97b5783.jpg?auto=compress&fix=max&w=2560",
      "publishedAt": "2023-01-04T15:02:53Z",
      "content": "NVIDIA DRIVE Thor Level 4 2023 CES  Snapdragon Ride Flex SoC \r\nSnapdragon Ride Flex SoC 2024 \r\n Snapdragon Ride Flex SoC SoC \r\n Snapdragon Ride Flex SoC Snapdragon Digital Chassis SoC \r\nSnapdragon Ri… [+268 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Elladodelmal.com"
      },
      "author": "noreply@blogger.com (Chema Alonso)",
      "title": "V Edición BootCamp Online de DevOps & DevSecOps en GeeksHubs Academy",
      "description": "La seguridad de las aplicaciones y los sistemas tiene muchas líneas de defensa. El producto en sí como esté pensado por el equipo de negocio probablemente en las primera, el diseño de la solución que hacen los arquitectos de software es la segunda, las buenas…",
      "url": "https://www.elladodelmal.com/2023/01/v-edicion-bootcamp-online-de-devops.html",
      "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWmnt5shvFQGaVntDF8bifTrx_nZM8I0GRrBnPnRx5FIwVmGM-MyviHaOKtJPalUTSyK-3dwYh11VlFkzQ_V2wmk7asVcvtIHAME2P5gvkz9NkU_rjPJZt4Yb7_2c3PJONGIdQeMMVIt40jrp1GM-b0cM6FJcPMUIPT_iztVWuMtJSojLoMg/w1200-h630-p-k-no-nu/devops_0.jpg",
      "publishedAt": "2023-01-18T05:01:00Z",
      "content": "La seguridad de las aplicaciones y los sistemas tiene muchas líneas de defensa. El producto en sí como esté pensado por el equipo de negocio probablemente en las primera, el diseño de la solución que… [+1764 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Elladodelmal.com"
      },
      "author": "noreply@blogger.com (Chema Alonso)",
      "title": "Cómo buscar vulnerabilidades en SmartContracts, SQL Injection, XSS o bugs Python con ChatGPT",
      "description": "Hace poco os hablaba del estudio que arrojaba como resultados que los programadores que utilizan asistentes de código basados en inteligencia artificial son más propensos a generar código con fallos de seguridad, y además hemos visto que si pides que te hagan…",
      "url": "https://www.elladodelmal.com/2023/01/como-buscar-vulnerabilidades-en.html",
      "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeL9EznmR1pVfTNdSiGzOvsmt-7MInorA_gSz8kmzZcYpgfw7vlhCevLROqE2yFFErh84by_zUGIyAvplp9BpIV_OqiRLTNwxMTKdY7z6qu6IShVzgS_l7woHb73Hh4dbacZMS6HXzCMv_bq416DRvstx4zcig5Z07pnv6K1HctGKjd-3lqw/w1200-h630-p-k-no-nu/chatgpt_0.jpg",
      "publishedAt": "2023-01-04T06:26:00Z",
      "content": "Vamos a hacer cuatro ejemplos de corrección de su propio código, de búsqueda de vulnerabilidades, de revisión en profundidad de un código, y de generación de código seguro desde el principio. Vamos a… [+4333 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Olhardigital.com.br"
      },
      "author": "Fernando Riva",
      "title": "A evolução da área de TI no core business das empresas",
      "description": "Por muito tempo, a tecnologia dentro das empresas era tratada apenas como área de suporte, focada em melhorar a eficiência de processos e frequentemente direcionada a redução de custos. Com o advento da transformação digital, as organizações precisaram correr…",
      "url": "https://olhardigital.com.br/2023/01/16/colunistas/a-evolucao-da-area-de-ti-no-core-business-das-empresas/",
      "urlToImage": "https://img.olhardigital.com.br/wp-content/uploads/2023/01/shutterstock_2016196394.jpg",
      "publishedAt": "2023-01-16T11:00:00Z",
      "content": "Por muito tempo, a tecnologia dentro das empresas era tratada apenas como Ã¡rea de suporte, focada em melhorar a eficiÃªncia de processos e frequentemente direcionada a reduÃ§Ã£o de custos.\r\nCom o ad… [+4616 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Habr.com"
      },
      "author": "habr_career",
      "title": "Собеседование наоборот: РТЛабс, МойОфис, Лига Цифровой Экономики, Контур, НЛМК, Nexign / часть 1",
      "description": "В ноябре на Хабр Карьере завершилась карьерная неделя бэкенда. Карьерная неделя — это что-то вроде дня открытых дверей, который длится всю неделю. В гонке за специалистами участвовали шесть компаний: РТЛабс\r\n, МойОфис\r\n, Лига Цифровой Экономики\r\n, Контур\r\n, Н…",
      "url": "https://habr.com/ru/company/habr_career/blog/707732/#post-content-body",
      "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/986/a79/575/986a795756aa9d094652c7e42109a8be.png",
      "publishedAt": "2022-12-26T12:11:21Z",
      "content": ". - , . : \r\n, \r\n, \r\n, \r\n, \r\nNexign\r\n. \r\n -. , , . \r\n , , . , , . \r\n, \r\n, \r\n, \r\n, \r\n-, \r\n, , Nexign\r\n, , ?\r\n: , , junior.   . « » , . , , . .\r\n: , . . , - - . .\r\n: , , , , . , , .\r\n: , - . . , . \r\n: ,… [+2126 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Habr.com"
      },
      "author": "Lavs",
      "title": "Я выбрал язык программирования с помощью икигаи, коучей и рефлексии — и это сработало",
      "description": "Я в IT уже 15 лет: 10 лет разрабатывал DevOps в 1C и 3 года руководил отделом разработчиков в Сбере и не писал код. Однажды я понял, что хочу кодить, а не руководить — и передо мной встал вопрос: какой выбрать язык?Может быть, взять самый популярный? Или тот,…",
      "url": "https://habr.com/ru/post/708532/#post-content-body",
      "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/8e9/fda/9bb/8e9fda9bb99f04a9b0865b8e4249cb08.jpg",
      "publishedAt": "2023-01-09T13:21:42Z",
      "content": "IT 15 : 10 DevOps 1C 3 . , , : ?\r\n , ? , ? , , ?..\r\n , , . 26 000 , .\r\n. , , , . , . , - , .\r\n , IT. . . , .\r\n , IT. . , . .\r\n , , . 6000 , . , .\r\n , . , , . , , , - . .\r\n 9 3\r\n 5000 . , 9 IT, , . , … [+1438 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Javacodegeeks.com"
      },
      "author": "Jaydeep Karale",
      "title": "How To Use Playwright For Web Scraping with Python",
      "description": "In today’s data-driven world, the ability to access and analyze large amounts of data can give researchers, businesses & organizations a competitive edge. One of the most important & free sources of this data is the Internet, which can be accessed and mined t…",
      "url": "https://www.javacodegeeks.com/2023/01/how-to-use-playwright-for-web-scraping-with-python.html",
      "urlToImage": "https://www.javacodegeeks.com/wp-content/uploads/2012/10/python-logo.jpg",
      "publishedAt": "2023-01-19T05:00:00Z",
      "content": "In todays data-driven world, the ability to access and analyze large amounts of data can give researchers, businesses &amp; organizations a competitive edge. One of the most important &amp; free sour… [+35168 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Buzzorange.com"
      },
      "author": "Anice H.",
      "title": "【2023 開工讀書】從 Google 首席經濟學家到 NSDAQ 科技長的閱讀清單——內含 2 本指定 CIO 必讀",
      "description": "新的一年又到來了，身為科技業領導人的你，準備好迎接 2023 年的新挑戰了嗎？ 以下我們整理了《華爾街日報》與科技媒體「Silicon Republic」專為科技人設計的選書清單，從數位科技、商業模式[...]\nThe post 【2023 開工讀書】從 Google 首席經濟學家到 NSDAQ 科技長的閱讀清單——內含 2 本指定 CIO 必讀 appeared first on TechOrange 科技報橘.",
      "url": "https://buzzorange.com/techorange/2023/01/03/books-for-cios/",
      "urlToImage": "https://buzzorange.com/techorange/app/uploads/2023/01/22fc449c3d9bc069.jpg",
      "publishedAt": "2023-01-03T04:10:21Z",
      "content": "2023 \r\nSilicon Republic10 2023 \r\nCIO \r\nThe Mathematical Corporation: Where Machine Intelligence and Human Ingenuity Achieve the Impossible\r\n Josh SullivanAngela Zutavern ServiceNow Inc. Chris Bedi AI… [+700 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ZDNet"
      },
      "author": "ZDNet Japan Staff",
      "title": "国内企業のDevOps実践率は59.3％に上昇--IDC調査",
      "description": "IDC Japanは、国内企業のDevOps実践状況に関する最新調査の結果を発表した。",
      "url": "https://japan.zdnet.com/article/35198395/",
      "urlToImage": "https://japan.zdnet.com/storage/2017/10/31/dbf65481317bdf76f1ebffc35e7af1f8/devops_640x480.jpg",
      "publishedAt": "2023-01-10T06:52:00Z",
      "content": "The Japanese edition of 'ZDNet' is published under license from A Red Ventures Company., Fort\r\n Mill, SC, USA. Editorial items appearing in 'ZDNet Japan' that were originally published in the\r\n US Ed… [+389 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Diginomica"
      },
      "author": "Mark Chillingworth",
      "title": "The role of Enterprise Architect evolves to focus on business value - Diginomica",
      "description": "As organizations digitally transform, Enterprise Architects are not losing their relevance - the role is, in fact, becoming more important",
      "url": "https://diginomica.com/role-enterprise-architect-evolves-focus-business-value",
      "urlToImage": "https://diginomica.com/sites/default/files/images/2020-04/shutterstock_1090386311.jpg",
      "publishedAt": "2023-01-12T09:56:22Z",
      "content": "(© everything possible - Shutterstock)\r\nThe role of the Enterprise Architect is evolving. Enterprise architecture is becoming focused on business capabilities, organizational value streams and then t… [+7693 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BetaNews"
      },
      "author": "Brian Otten",
      "title": "Achieving and sustaining API success",
      "description": "Most organizations are now embracing APIs to provide flexible connectivity between systems, making it easy for developers to get started and build digital products. While developers everywhere are, of course, familiar with API lifecycle management -- a major …",
      "url": "https://betanews.com/2023/01/19/achieving-and-sustaining-api-success/",
      "urlToImage": "https://betanews.com/wp-content/uploads/2015/10/API-key-50x50.jpg",
      "publishedAt": "2023-01-19T16:57:27Z",
      "content": "Most organizations are now embracing APIs to provide flexible connectivity between systems, making it easy for developers to get started and build digital products. While developers everywhere are, o… [+6174 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BetaNews"
      },
      "author": "Sitaram Iyer",
      "title": "Fast secure: Achieving secure continuous delivery of cloud native applications",
      "description": "Continuous integration and continuous delivery (CI/CD) are critical to achieving DevOps success across organizations -- offering the ability to get software changes into production safely, quickly, and sustainably. By reducing the time between when code is wr…",
      "url": "https://betanews.com/2023/01/10/secure-continuous-delivery-cloud-native-applications/",
      "urlToImage": "https://betanews.com/wp-content/uploads/2017/06/Cloud-data-security-e1502649814717-50x50.jpg",
      "publishedAt": "2023-01-10T16:14:27Z",
      "content": "Continuous integration and continuous delivery (CI/CD) are critical to achieving DevOps success across organizations -- offering the ability to get software changes into production safely, quickly, a… [+5917 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BetaNews"
      },
      "author": "Ian Barker",
      "title": "Platform engineering, SBOMs and off-the-shelf solutions -- development predictions for 2023",
      "description": "Developers are under more pressure than ever to deliver projects quickly, but at the same time applications and the supply chain need to be kept secure. So, what things can we expect to see for development in 2023? Here are some expert views on the key trends…",
      "url": "https://betanews.com/2022/12/28/platform-engineering-sboms-and-off-the-shelf-solutions-development-predictions-for-2023/",
      "urlToImage": "https://betanews.com/wp-content/uploads/2017/01/Writing-code-coding-programming-programmer-coder-e1483446151347-50x50.jpg",
      "publishedAt": "2022-12-28T14:36:36Z",
      "content": "Developers are under more pressure than ever to deliver projects quickly, but at the same time applications and the supply chain need to be kept secure.\r\nSo, what things can we expect to see for deve… [+9112 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BetaNews"
      },
      "author": "David Winikoff",
      "title": "How automation will fill IT labor gaps",
      "description": "People who have viewed automation and artificial intelligence with a sense of dread may be beginning to appreciate how it can reduce the boring, repetitive work that is the bane of their lives. In fact, rather than being a threat to human contributions to the…",
      "url": "https://betanews.com/2023/01/04/automation-labor-gaps/",
      "urlToImage": "https://betanews.com/wp-content/uploads/2018/11/Skills-gap-50x50.jpg",
      "publishedAt": "2023-01-04T11:08:07Z",
      "content": "People who have viewed automation and artificial intelligence with a sense of dread may be beginning to appreciate how it can reduce the boring, repetitive work that is the bane of their lives. In fa… [+4208 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BetaNews"
      },
      "author": "Ian Barker",
      "title": "If you don't know what you're exposing, how can you protect it? [Q&A]",
      "description": "The move to the cloud has meant the days of external exposure being defined by the set of IP ranges in your firewall are gone. Today's attack surface is made up of many internet-facing assets with exposure being controlled at the domain level. This means web …",
      "url": "https://betanews.com/2022/12/30/if-you-dont-know-what-youre-exposing-how-can-you-protect-it-qa/",
      "urlToImage": "https://betanews.com/wp-content/uploads/2015/04/network-virus-spread-sprawl-50x50.jpg",
      "publishedAt": "2022-12-30T09:53:44Z",
      "content": "The move to the cloud has meant the days of external exposure being defined by the set of IP ranges in your firewall are gone. Today's attack surface is made up of many internet-facing assets with ex… [+6776 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BetaNews"
      },
      "author": "Ian Barker",
      "title": "More machine IDs, attacks on providers and AI verification -- identity management predictions for 2023",
      "description": "Although the death of the password has been predicted for many years, older technology still clings on when it comes to verifying identities. But that's changing, particularly with the massive growth in the numbers of machine IDs. Here is what some industry e…",
      "url": "https://betanews.com/2022/12/29/more-machine-ids-attacks-on-providers-and-ai-verification-identity-management-predictions-for-2023/",
      "urlToImage": "https://betanews.com/wp-content/uploads/2022/08/crowd-individual-identity-50x50.jpg",
      "publishedAt": "2022-12-29T11:52:04Z",
      "content": "Although the death of the password has been predicted for many years, older technology still clings on when it comes to verifying identities.\r\nBut that's changing, particularly with the massive growt… [+7485 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BetaNews"
      },
      "author": "Ian Barker",
      "title": "More complexity, more automation and data sovereignty concerns -- cloud predictions for 2023",
      "description": "No longer the new 'big thing', the cloud has matured into something that almost all organizations rely on daily. But it's still evolving and its importance has grown over the last two years as we've switched to remote and hybrid working. Here are some expert …",
      "url": "https://betanews.com/2022/12/29/more-complexity-more-automation-and-data-sovereignty-concerns-cloud-predictions-for-2023/",
      "urlToImage": "https://betanews.com/wp-content/uploads/2021/12/Crystal-ball-cloud-50x50.jpg",
      "publishedAt": "2022-12-29T14:43:41Z",
      "content": "No longer the new 'big thing', the cloud has matured into something that almost all organizations rely on daily. But it's still evolving and its importance has grown over the last two years as we've … [+8171 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Seeking Alpha"
      },
      "author": "Normad Capital",
      "title": "Nagarro: Strong Secular Trends And Outlook",
      "description": "There is high demand for IT service providers like Nagarro SE. See why I would recommend waiting for the NGRRF stock price to fall further before investing.",
      "url": "https://seekingalpha.com/article/4568132-nagarro-strong-secular-trends-and-outlook",
      "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1366540967/image_1366540967.jpg?io=getty-c-w750",
      "publishedAt": "2023-01-05T21:48:49Z",
      "content": "metamorworks/iStock via Getty Images\r\nSummary\r\n There is high demand for IT service providers like Nagarro SE (OTCPK:NGRRF) due to the increasing digitization of business processes and the need for b… [+11000 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CoinDesk"
      },
      "author": "Margaux Nijkerk",
      "title": "Latest Ethereum ‘Shadow Fork’ Brings Blockchain’s Shanghai Upgrade Closer to Reality",
      "description": "The first set of testing has commenced for the much anticipated Shanghai upgrade, expected in March, that will enable staked ether withdrawals. Some minor glitches were reported.",
      "url": "https://www.coindesk.com/tech/2023/01/23/latest-ethereum-shadow-fork-brings-blockchains-shanghai-upgrade-closer-to-reality/",
      "urlToImage": "https://www.coindesk.com/resizer/lI5PiGm--8fdJFWtpH1E5gW-AmU=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/V7X4S76Q6RE6RH6RO3IG5MTCUE.jpg",
      "publishedAt": "2023-01-23T14:15:50Z",
      "content": "Ethereum developers said they successfully created a copy of the blockchain known as a shadow fork to provide a testing environment ahead of a crucial upgrade known as the Shanghai hard fork.\r\nThe sh… [+1862 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CoinDesk"
      },
      "author": "Margaux Nijkerk",
      "title": "Ethereum in 2023: Here’s What to Look Forward To",
      "description": "Staked ETH withdrawals, scalability, and more cool events are on the horizon. Valid Points is CoinDesk’s weekly newsletter breaking down Ethereum’s evolution and its impact on crypto markets.",
      "url": "https://www.coindesk.com/tech/2023/01/04/ethereum-in-2023-heres-what-to-look-forward-to/",
      "urlToImage": "https://www.coindesk.com/resizer/gjpB55AmWc49EXnmyem6-AZkHvg=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZE2W2DQMKBBRTMEEEZPDLV4V54.jpg",
      "publishedAt": "2023-01-04T12:30:00Z",
      "content": "This will be the most pressing issue that Ethereum developers will tackle.\r\nAfter Septembers Merge, when Ethereum switched its consensus mechanism to proof-of-stake (PoS), the network began to use va… [+5770 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Stackoverflow.blog"
      },
      "author": "Ryan Donovan and Cassidy Williams",
      "title": "The Overflow #161: Git isn’t the only game in town",
      "description": "Side project to C-suite, historical telescope lenses, and 3D CSS.\nThe post The Overflow #161: Git isn’t the only game in town appeared first on Stack Overflow Blog.",
      "url": "https://stackoverflow.blog/2023/01/20/the-overflow-161-git-isnt-the-only-game-in-town/",
      "urlToImage": "https://149351115.v2.pressablecdn.com/wp-content/uploads/2019/09/The-Overflow-Blog.png",
      "publishedAt": "2023-01-20T13:00:00Z",
      "content": "Welcome to ISSUE #161 of The Overflow! This newsletter is by developers, for developers, written and curated by the Stack Overflow team and Cassidy Williams. This week, we celebrate our annual tradit… [+2626 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Stackoverflow.blog"
      },
      "author": "Ryan Donovan",
      "title": "Beyond Git: The other version control systems developers use",
      "description": "Our developer survey found 93% of developers use Git. But what are the other 7% using?\nThe post Beyond Git: The other version control systems developers use appeared first on Stack Overflow Blog.",
      "url": "https://stackoverflow.blog/2023/01/09/beyond-git-the-other-version-control-systems-developers-use/",
      "urlToImage": "https://lh3.googleusercontent.com/h3xWAKkvrYZGTtF4lS1DKuz2zTZQdbkJBajILE4YOGCP8u9j9wyvKbfGaItd7h5y046Cg7MjClraubI13axIS1GNiQracqAPEJPQNbmApjfweKFYJXJ_ESCrTpOYC4paK6VL5NNfx4v-2v93QcNmy08o8qufJ1s9pTlF65_jHz_PxRnOvXIBWm790Bpx",
      "publishedAt": "2023-01-09T14:00:00Z",
      "content": "At my first job out of college (pre-Y2K), I got my first taste of version control systems. We used  Microsofts Visual SourceSafe (VSS), which had a repository of all the files needed for a release, w… [+15747 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Blogdumoderateur.com"
      },
      "author": "Alexandra Patard",
      "title": "Expert en sécurité digitale, un métier d’avenir pour répondre aux enjeux des entreprises",
      "description": "Un formateur et deux étudiants d’Aston École Informatique décryptent pour nous les challenges à relever pour les entreprises en matière de cybersécurité en 2023, et les compétences requises pour réussir dans ce domaine.",
      "url": "https://www.blogdumoderateur.com/expert-securite-digitale-metier-avenir-repondre-enjeux-entreprises/",
      "urlToImage": "https://f.hellowork.com/blogdumoderateur/2022/12/expert-securite-digitale-metier-avenir-aston.jpg",
      "publishedAt": "2023-01-19T08:00:22Z",
      "content": "Les tendances de la cybersécurité et les spécialisations à suivre en 2023\r\nAlors que le nombre dattaques informatiques a explosé en 2022, la sécurité digitale est devenue un enjeu majeur pour toutes … [+6243 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Blogdumoderateur.com"
      },
      "author": "Alexandra Patard",
      "title": "Cartographie des métiers du digital en 2023",
      "description": "Tout savoir sur les métiers du marketing et de la tech : rôle, objectif, missions et salaires.",
      "url": "https://www.blogdumoderateur.com/cartographie-metiers-digital-2023/",
      "urlToImage": "https://f.hellowork.com/blogdumoderateur/2023/01/cartographie-metiers-digital-bdm-2023-1200x628.jpg",
      "publishedAt": "2023-01-17T07:30:27Z",
      "content": "Les métiers du digital vous intéressent, mais vous souhaitez en apprendre davantage sur les contours de chaque profession, les spécificités des différentes disciplines et connaître les salaires propo… [+34477 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "InfoQ.com"
      },
      "author": "Matt Campbell",
      "title": "State of DevOps Report Finds Platform Teams Lacking Product Management Support",
      "description": "Puppet released the 2023 State of DevOps Report with a focus on Platform Engineering. The report found that organizations with platform engineering teams report increased developer velocity, improvements in system reliability, greater productivity, and better…",
      "url": "https://www.infoq.com/news/2023/01/state-devops-report-2023/",
      "urlToImage": "https://res.infoq.com/news/2023/01/state-devops-report-2023/en/headerimage/generatedHeaderImage-1674252186694.jpg",
      "publishedAt": "2023-01-22T07:00:00Z",
      "content": "Puppet released the 2023 State of DevOps Report with a focus on Platform Engineering. The report found that organizations with platform engineering teams report increased developer velocity, improvem… [+3606 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "InfoQ.com"
      },
      "author": "Daniel Bryant, Wesley Reisz, Thomas Betts, Shane Hastie, Srini Penchikala",
      "title": "Article: InfoQ Software Trends Report: Major Trends in 2022 and What to Watch for in 2023",
      "description": "2022 was another year of significant technological innovations and trends in the software industry and communities. The InfoQ podcast co-hosts met last month to discuss the major trends from 2022, and what to watch in 2023.. This article is a summary of the 2…",
      "url": "https://www.infoq.com/articles/infoq-software-trends-report-2022/",
      "urlToImage": "https://res.infoq.com/articles/infoq-software-trends-report-2022/en/headerimage/trends-report-2022-2023-twitter_card-1672912427141.jpg",
      "publishedAt": "2023-01-13T14:00:00Z",
      "content": "<ul><li>As a technical leader, the architect’s role is to communicate architecture decisions effectively with all stakeholders. We are seeing companies adopt Architecture decision records (ADRs) and … [+19061 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "InfoQ.com"
      },
      "author": "Sarah Saunders",
      "title": "Article: Blue-Green Deployment From the Trenches",
      "description": "Introducing blue-green deployments is often a beneficial improvement. However, with some architectures, it can be challenging to make the changes without impeding deployments. This article covers the challenges and lessons learned in implementing blue-green d…",
      "url": "https://www.infoq.com/articles/blue-green-deployments/",
      "urlToImage": "https://res.infoq.com/articles/blue-green-deployments/en/headerimage/blue-green-deployment-from-the-trenches-header-1672220935410.jpg",
      "publishedAt": "2023-01-03T09:00:00Z",
      "content": "<ul><li>Handling breaking changes in a blue-green deployment requires upfront planning and good architectural choices</li><li>One approach to handling breaking changes is to dependency order the rele… [+14145 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "InfoQ.com"
      },
      "author": "Stefania Chaplin",
      "title": "Presentation: Securing Microservices: Preventing Vulnerability Traversal",
      "description": "Stefania Chaplin is looking at OWASP recommendations and Kubernetes best practices to find out more about how to secure microservices and reduce vulnerability traversal. By Stefania Chaplin",
      "url": "https://www.infoq.com/presentations/secure-microservices/",
      "urlToImage": "https://res.infoq.com/presentations/secure-microservices/en/mediumimage/Stefania+Chaplin-m-1674204811056.jpg",
      "publishedAt": "2023-01-20T14:58:00Z",
      "content": "Transcript\r\nChaplin: I'm Stefania Chaplin, aka devstefops. I am a Solutions Architect at GitLab. I'm going to talk about securing microservices, preventing vulnerability traversal.\r\nOutline\r\nA little… [+36074 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "InfoQ.com"
      },
      "author": "Simon Powers",
      "title": "Podcast: People Matter Most in Organisational Change",
      "description": "In this podcast Shane Hastie, Lead Editor for Culture & Methods spoke to Simon Powers about why organisational change is hard, putting people first, the need for emergence rather than recipes and his new book Change: A practitioners guide to Enterprise Agile …",
      "url": "https://www.infoq.com/podcasts/people-matter-organisational-change/",
      "urlToImage": "https://res.infoq.com/podcasts/people-matter-organisational-change/en/smallimage/engineering-culture-podcast-logo-1667540501577-1672849923775.jpeg",
      "publishedAt": "2023-01-06T09:00:00Z",
      "content": "<ul><li>Organisations are complex places and they need to be able to adapt to the changing environment in which they operate</li><li>People are both the agents of change and the recipients of those c… [+29481 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "InfoQ.com"
      },
      "author": "Melissa Daley, Bob Crews, Adam Sandman",
      "title": "Podcast: Great Products Need a Culture of Quality and Passionate People",
      "description": "In this podcast Shane Hastie spoke to Melissa Daley, Bob Crews and Adam Sandman, about the state of testing and how to instil a culture of quality into software teams By Melissa Daley, Bob Crews, Adam Sandman",
      "url": "https://www.infoq.com/podcasts/great-products-quality-culture/",
      "urlToImage": "https://res.infoq.com/podcasts/great-products-quality-culture/en/smallimage/engineering-culture-podcast-logo-1667540501577-1673522900647.jpeg",
      "publishedAt": "2023-01-13T10:00:00Z",
      "content": "<ul><li>Quality is more than just testing</li><li>Leaders need to Model Blameless Behaviour</li><li>The quality of communication in a development team directly impacts the quality of the software bei… [+38992 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ZDNet"
      },
      "author": "國谷武史",
      "title": "ソフトウェア企業に見る、DevOpsによる製品開発と事業展開の変化",
      "description": "DevOpsには変化に対応しやすいメリットがあり、事業展開を加速させたり製品の品質向上を図ったりする上では、DevOpsを機能させるためのさまざまな工夫が重要になる。",
      "url": "https://japan.zdnet.com/article/35198530/",
      "urlToImage": "https://japan.zdnet.com/storage/2021/09/29/d3606d8dbf34fc245da26c273a88cc8d/devops1_1280x960.jpg",
      "publishedAt": "2023-01-19T21:00:00Z",
      "content": "The Japanese edition of 'ZDNET' is published under license from A Red Ventures Company., Fort\r\n Mill, SC, USA. Editorial items appearing in 'ZDNET Japan' that were originally published in the\r\n US Ed… [+389 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ZDNet France"
      },
      "author": "Thierry Noisette",
      "title": "Libre et open source express: dons aux associations, alliance anti-Google Maps, manifeste pour un numérique sobre",
      "description": "Fêtes et cadeaux: pensez à soutenir les associations libristes et proches. Une alliance pour une cartographie libre... anti-Google Maps. Manifeste néo-aquitain-francilien pour un numérique sobre grâce aux logiciels libres.",
      "url": "https://www.zdnet.fr/blogs/l-esprit-libre/libre-et-open-source-express-dons-aux-associations-alliance-anti-google-maps-manifeste-pour-un-numerique-sobre-39951742.htm",
      "urlToImage": "https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2017/05/open-source-KeepCalmAndUse.jpg",
      "publishedAt": "2022-12-26T17:15:01Z",
      "content": "Dons aux associations: pensez à contribuer\r\n«Une dépêche annuelle remarquablement nécessaire!», notais-je ici lan dernier: pour la 11e fois, Benoît Sibaud invite sur Linuxfr à faire des dons aux asso… [+8428 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ZDNet France"
      },
      "author": "Jean-Philippe Leblanc, CircleCI",
      "title": "Eviter les pannes de système pour bien commencer l’année",
      "description": "Comment les entreprises peuvent-elles à la fois assurer le repos de leurs équipes durant les vacances tout en maintenant la productivité ? Réponse par Jean-Philippe Leblanc, Senior Vice President of Engineering de CircleCI.",
      "url": "https://www.zdnet.fr/actualites/eviter-les-pannes-de-systeme-pour-bien-commencer-l-annee-39951980.htm",
      "urlToImage": "https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2022/BugLogiciel__w630.jpg",
      "publishedAt": "2023-01-04T09:00:00Z",
      "content": "Les fêtes de fin dannée viennent de se clôturer, marquant la fin dune période compliquée pour les entreprises technologiques. Et pour cause, les effectifs étaient réduits alors que la demande sintens… [+6729 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ubuntu.com"
      },
      "author": "Andreea Munteanu (Andreea Munteanu)",
      "title": "What is MLOps going to look like in 2023?",
      "description": "While AI seems to be the topic of the moment, especially in the tech industry, the need to make it happen in a reliable way is becoming more obvious. MLOps, as a practice, finds itself in a place where it needs to keep growing and remain relevant in view of t…",
      "url": "https://ubuntu.com/blog/mlops-in-2023",
      "urlToImage": "https://ubuntu.com/wp-content/uploads/c4fa/1_1_Capture.jpg",
      "publishedAt": "2023-01-23T09:43:18Z",
      "content": "While AI seems to be the topic of the moment, especially in the tech industry, the need to make it happen in a reliable way is becoming more obvious. MLOps, as a practice, finds itself in a place whe… [+6030 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ubuntu.com"
      },
      "author": "Florencia Cabral Berenfus (Florencia Cabral Berenfus)",
      "title": "Getting started with ROS security scanning",
      "description": "It’s a new year, and an especially great time to reflect on the security of your robots. After all, those interested in breaching it are probably doing the same. In previous articles, we discussed ROS security by detailing practical steps for securing your ro…",
      "url": "https://ubuntu.com/blog/getting-started-with-ros-security-scanning",
      "urlToImage": "https://ubuntu.com/wp-content/uploads/657a/robot_sunset.png",
      "publishedAt": "2023-01-16T13:08:17Z",
      "content": "Its a new year, and an especially great time to reflect on the security of your robots. After all, those interested in breaching it are probably doing the same. In previous articles, we discussed ROS… [+9126 chars]"
    }
  ];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNews().subscribe((data) => {
      console.log(data);
      // this.data = data
    });
  }

}