import '../Home/Home.css'
import SearchBar from '../SearchBar/SearchBar'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";


export default function Home () {

    return (
      <div className="Home">

        <SearchBar></SearchBar>
        
        <Carousel 
        showArrows={true} 
        emulateTouch={true}
        swipeable={true} 
        autoPlay={true} 
        interval={6000} 
        infiniteLoop={true} 
        stopOnHover={true} 
        showThumbs={false}
        width={800}>
                <div>
                    <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                    <Link to='/details'><p className="legend"> 20% DISCOUNT </p></Link>
                    
                </div>
                <div>
                    <img src="https://mobidictum.biz/wp-content/uploads/2022/05/FIFA-and-EA-end-partnership-800x400.jpg" />
                    
                    <Link to='/details'><p className="legend"> PLAY WHIT YOUR FRIENDS ! </p></Link>
                    
                </div>
                <div>
                    <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRYYGRgYHBgaGBocGBoYGhwYGBwcHBoYGRocIS4lHB4rJBgaJjonKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQrJSw0NDQ0NjE0NDQ2NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQYAB//EADoQAAIBAgQDBQcDBAICAwEAAAECEQADBBIhMQVBUSJhcYGRBhMyQqGx8MHR4RRScoJi8SMzg5LCFf/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAAmEQACAgICAQQCAwEAAAAAAAAAAQIRAyESMUEEEyJhUZEUscEy/9oADAMBAAIRAxEAPwD5SK9XoqaYcgUSqRRFoBIipAq+WvRQYUUolq0zGFBJ6AEn0FMcPwLXGOoVFgu7aKgOgk9TsBufI12/AcVw+zALhzsSyPE9VEdnxme+stuh0jiGwdxQSUeBucpgePShLX0jjHtRbRx/TXbrCAcjsWttp2lU5iVaPHauOx6Ldd7yIEQkZ+mc7hQN2O8DvJga0slukPFryZqimsKhMmul4E3DkXM6szDdrkEd5W2sqB/ln/Udkn9PGYYa0maCPfgF2WJBFlVdwsaiYGu1OsSfkKyxWz5ots9K867V9LfhvDrymStp+TWzcK+augA8B61ymP8AZ24HItlLij4WV7YJH+BbMD3QanPDJbRXHnxy1ZzkUQLTOL4ddtf+y26dCyMoPgSIPlQYioSUl2dcafQbCrDeVPl6zcM8knltR7t8KCT5eNI1ZeMqVAcSZcny9KlLPXer4a2QC76Ty6Dqe+rPe0gefhRsSuWymUVKidBQi1Fw0lgAJJ0A6k7CmirdAaSNHDcCvOoZLbMp2MaHwJ3oj+zWJG9l/IT9q2eI8bf3zoWE2iVhdMqjQEJ/aY5VqYL2ljs3BPr6gjVTXofxVWjm5yatJHBYrAunxo697Iyj6isu/cA519gvcSsXPhcK0SGBAM9Gjn3jQ8xWa2Gw105MRYRydnCAP4Zl1B7gddweQT+K6tA5ya6Pkj3DQWNdd7Wexz4fNcsEva3K7ug7/wC5e/frzrjc1ScXF0yL2eaqGpJqQlZEmigFTFEIqpNMK0VNVNWNVNEWiDUVaqk0RSKioL1XMa1gL16qZq9mrWY8TUVZ0iptW5MdxJ8AJNCwpWUo+H3in8PhQjB1MglVgjaRJJ7oH3qvE7CqUdCCrgHTYHZl9QfUUnNN0dP8dqPJlUs+lVa3R8NdBHjVrtuKHIHAOcOMiZmy2wcypsz8musYOUGMo0JIEAbkv2eK4VBl/orTjmWe8GPh2zl9fIbVj3mZjmY66eQAgADuAAHhVHeNF3/N6PJroVquw98Jcf8A8COJklATcKxzQxmIHfrQsZi2coiiFQZERevzE8yxO57qM3EHRVRGKgwzleyXJ2zEakDYA7a9SSljMW7tmcksRBY7sP8AkdyeUnpRVX9nPKTa+jdwlu3ZWWAuXI0WT7tD/wAisF3HQEKDPxbAuGxRzhiSSTmzTrOpkneZ51mI8gHqJ9aPYOgPTT0p4p+CMm32djZ4mmUTbRm5sygux/uZtyx3J5k0T+tsndGHg+npFcvbunu9T+1W9+fyRVv2Lyl5Otw2LRfgvuhPUQvmFgms72hsI1vPCZsyxcRAkyYKsABm3BkydtdxWNbxPUfUVXF4sZCNdSNwes60k9xdlsOSXNUq2ugdrL2V2HPr3xTVzD20YNcD9RDLAHpr41m4LiKW2LFM5IjXl3itPChsQY7GXkCNesROo79hXlTbTt9H02GMHFptF71tHTOuZV1gMQZI56DblWeDFbHHFCZUAACgCB6+tY4Apo7SBlqLSX4L4dVzS+qqCzDaVQFioPKQI860uH4yLyXHFsJaJuMFVLYhBKiVAkZ8g7WY61jXr4AI6giO4iI+tZj3XaVB+IQZ00DAjQDmQPSunE/J5+eVOvydPirSM5uEnMR15kQWBGu33NKniOTdlMaDMQrfz/FYV1LyBVznKyyuUyIEAieREgEcpHI1NnAE65N+bfzXV7/HaJLI1pI1m4/bA11/xOarXeJ5VV2t3EV8pUkAAqfmBnaowGCw6nNfdoHJEbL53IiPCuvcYbE2silGQAAKNMsDQRuu30B5Vv5mR+Q8pnLnjpUfG4Hc381zN7tuzKIBYkeZmmcVgmtu9skkI0CekBhPkR5zXstTy5nNKwcnLTF1tgUXD4cu0CB1J2AqWWr4VZYqN2EDxGo+1Rb0aEVySY62EtIYJVyJJlidugXTn1rOx6rMquUaaeI/ea1ThlUjOO7MXCrERMbn+KzuJX0YwgAAjaTt495NaD2dWfGlB6S/szzVTUsYoLvVLPOaLO9CJqK8KIrR6rKpOgBJOwGpJ6Ac6fXD2wMrEq/93yg8wY2jaddc3KCD28J7ke8Ygn5MpmB/fpzM9nzbks5MPtslbww6gBUdzM51Dgn5o5gL8IIIkhj/AGwz/wDzlvBXE2gwkzEAz8M9/wAQ0GnKIJHgLiXmJu20ygqJWUHcmmwgEkrEKpOpgHTxWBLLqR7sux1n410khduyRHLLlA2pk96KRhfW0cu4o2BKq0sJUgq3+LCDVIqVWpy2qFgqdmvisPHwXWCuBK5GOsAECNDt9azsZcCrkjY89xE795LEnyqLN1l2Zh3AkUB0kk9aklXZ2TyqS0tgbbkGtOxiQRB8v2rO92asopmQi60zTZNDSaKW25/n5409gUdsikfHmyHkcs5hPURR8NhSAFAkn1PP03oI04pu70Aw9lMiG6yywbIAHkBGyhnYEAAsrjZoykxqKz8UIJGRRB5anXXfpv61rXFQ6AhoEHLr8xYFTz1Ztqzr6AQNfhj0O49RVHJ9HO8cWrRWxiYGUg6bEdOlMLeHU+QP7Uxwy7EjuzDu2mO6TV8VigkM0wTA0pvcroywpq2wNu452zAdTA+kT61432BguJ6aQfDY1DnP2lUQNZDoT1mJ3oeIZBaJjQxE7z1nyoe5K9mlhjx0NpfYkKAGJIEDvoj4bNDM2kAgAayQsz4HMPLlNaOFdGwyXkVA4HubrdrOGtqFtuO1lAa2F+Wcwcgzso7Aak0uWbqrLem9OnJSrX+lFsKNlH3PrRZiCND+vdSb41RtrVG4gI2rno9FJI0Ll5m1Yk95M0rdxOoVZLEgAASSToAANz3Ui+KZp1jwo/DeyHucwCAeY07RHeZAn/kaeEbdCykG4hZW0oDlWut8QBJ90B8sg5S5kzvECDJMJYZsrhzEAgEnbtAjXu0oZR2MwdfL705fwxS0M3zMCeuxgeQb1LDlVU09JaOOar5XsZx4dlctOj5goGy5cpA79PMAHnWpwdkdFVxqBEzv0+lc/wAPvmcpYkAaDuPT0rWtuE1G24is1aspBqXyNXF8ABIYHMm5zO6tEEZIByxsdp0pS/wwizkQnMXA07wTG4kaDWrWuPrBSDPfoI8TSx4tcRSSEyDKQ0QSQZG2haeffz2qdWzWqMOzbOsgCTOnSAAAOW1VvXwDG9BvYgkKs7CD36k/rHlSxoiRaoYOJHSqm+O+gGqkUQNsK98d5qqMWIA3NDIp/AWPmzZeh7+6mjtk5zpWx+1w6ygm+5B/sXVz+3nS19cI2is6NrGaCvdJFKW8NcuMyptOrE/rV8RwZkXNmDNzHdTcorRzqMpfKzPuJlMVVSQZGhGx2160a1bLISPlJnXWD3dKDQZSO0b+Ft2r4BfssAWJnssV+IMPl5MSNIPyxQr1m+rhAJU6jZkIOpcnYLAnMNAB0FIYHFsjTlDDmD3iDB5SNPuDW1hLiPIW89oEQUZiEB+VtDDAGJ5wDpQtrs6oyUo0uwy4dLgCJplDZgBlJMjKpkzmuQPAKAfhJrN4pjGYhFOiblTALc4PQbDrvRsXikRclvciWIM9tpDme4DKvQFj8xrIp0+KEySpUuwauaKlynrtmykI6vmEAsrjfKC3YYQe0SNxtXrfCs+thw8RKsPduJ20Y5TtyJqbaNHHLx+hVGoiGpv4G5b+NCvLXaasgpGV4uOmj3u523rT9m+FnEX1QICRLNmEqFXcvqIXWJnmInalsNZLMFUEkkAAbydABX1DAcOXCWRbEe8eGusN4E5UnoNfw1bFDl8n0Tm6Qjb9nbadlSAAZGTMVDREjOSdvD61lJgULvYvsySvYdAGESSJmCU30HMCulW9WX7QqA1tuZDie7sEfr61ZJXaOPJbi7M+x7GsSfdXLLztDFWjoVYfYmuY9ouDth8hZ1YsWGQNnKAAGGYaTJ2BO2/KuqtXmXtAkEAx47VzfG0LgA9JHiTFLkjFK/IYS5JRSMnhzayf7Y85/incQoZSpGlIW7ekDQjerLiivxCa5r2dEaUaYuMGpMD7V7iVzM4QbLH56fetFcTmAAB17qXxOFC9oDUzJknWnUX2SlJLSG8BiCltx/flMd6l9fp9aUdmY699d9jPZXD3LSHDs6PkQ9s5kclR80ymvPUdw3rkXwBQlXHaUkFeQIOoPXWkyRa2zswzXHjEzUtknQTRlwZ5kD6mtFV/6+9eUVKzpUG+weB4SXYIis7HYfn710C8Hw6KFu4lEIGqoDcM5p1ywJ5b8qQGO92mRPjf426L8qD7nxA5VkXgSZ61241GMb7bOLLmqVROiunAJ8Ju3G5SAiT37mO4VznFbudiZ0UqqjoGUs3jLGfEnqapFQ1oEE9d/wB60nfSog5yl2Bwlo6kctCNuh0Pf+laaXezB0PKRH/RpDhrFHYEEyBqBPmRvzp+4gOnKpXTL4v+dFfewpCmDz0pDHMOyoiTqSAAY2EwPH0obOVJCtoNv4mhYdyTLQZEa9O7vrKJOWS1Qe3hcwk6fk1f+iH4ad94pHZXKRykkR1BOs9x/iiYXCvcbKgkwSdYAA3JJ2FTl8ey+OCklRkvg+n6GgPh2FddhuEoZ95c+H4gikx0BZoEnumkOJ4VEbsElTBBPRhI2/NK0ZXorL0skm/wc2yHoaHduMABOgNaz2xQLloEQdqdM5Z47VB196gXJsQPya9iWuZgsb+dWt39AB8unpUYjGMO0dSdNBQfYiVKjIUEOwHImiLZo1u1HaO7ak1eKYMYa2BCV6Ku1Vk8qxmqKkGqxRDVaYDQ9jVzOSdzLHxYlj960k4eFwwc7uzMP8UlR9S/06VbC8ea4uS66ZhsbihlYdGPynv0nmedOcRxFshUvBrZCIAUOdBoWACnWIaZk6sahJ20no9HFCMnzTvX6MHhuJdHChjlMl1PaUqBLaHSYXejXGVoZQBsGA5NEkeHTwPSmU4cArujq4y5Rlme0e0SCJXshhr1ofCrGaFZggYu7sRJVFOXRfmbR4XmWGwkgxSlLQ8bjGpdP/DsPYThQUNjLg7Kdm2D8znmPAH6npWxfuM7Fzuazn9qcOUTD2rVxLdsQs5ToNBIB35zJ3pvB30cSjA9eo8RvXZaS4o8ybbdhE1E1jcbxGYoOisf/sY//NaOJcpJGzKfWP8AquXv4jM7HkCVH+uh+s00WRyv4jmfs/T0pTi2GlVcd6nyAI/X0owOgp+3azoynYxr0MaGlyK4k8TqVnGNvQLtosQqiSdAO86CtbiGFhjIgjQ+PWmOA4LNdzkaJEePy/XX/WuRRd0dkmqFhgVQlRrlJE+BiaK2HBEESKPEtPUk/WiC3XUkcDezsMMoS2iqSQEULOpgARJ8K5T2oyo4ePjE+Y0P2HrXS4Q5kT/iiDzyisr2ywJbDpcA+ByD/jcA1PnbUf7VOceSaO3A+MkzjmxnQfWjYC4WYs2iIMxgb8lXzJA8JPKkxZbkp9KaNspbUMILuSf8baiPq7+lQxxTkd+bLUG0WcySTud6pVLj6SKqbn1rpPKCiDXgKDZejg0DAVXKSRufwD861a7eJEbTUsdaE1BpDKTSpMAbJOlGTDR+dKMq1a2MzhZABIWTsJOpMchvWFCcOwRuPlWAN2J0VV2JJ8/OQN6bwWKKOtuyTkRh7xiPigwZHUiQFG3q1aT4nD2wLKJcftGYhM7rK9oiSdZgCIB6kk5+LICsqKiuWZSqSQM0kCSTPwsCecRtvz5baVnq+igk2r2ExGKRiLZcKNgEBcsdpJ6nTWqcVe2FVFkkKBJI1gnXTxjvrFZhbB1zO255CdwP3/TcGGuMWAmZOv6mhBNuzpzZ4pO1v+hi4IEnQH6+HWgC+PGh8QvZnJ5DRR0UbCq4ZJM9K6VDdHkTysOxhukwRQ7rkmJk8qYKA7ialbYGwFGWPZHmT7wIAu4gTOuvOhOit8Oh6E6eVExCTty2pFqnJUysZ2izCor1y5t1/ahPO/KtY+jztQy9Q1UrJE5Mc4XhveXUQ7MwnUDsjVgCecA07xWzfDlriOskmSpyyxk5TsQJgdwFZdliCGUwQQQehGoNdBaxDMc1i97tjq1svkWTuFk5WWZgHWDEUJ6dlvT04uPkrYdksoysVLF2kaHUhF1/1c/7Vuey7PicRbtuiOpkOxWGFsK2Y5ljWCYmdTWZevNlC4mw3c69jQTyClefKK7D2Rw9tMLisRaL5ipRQygFdAWKkb/EuvdWwwTd/g6szaglF/X7MnjnDlS6zWRNlzKESRA0Ik85BpPOV7Skqw2IMGtHEXCuHtWtO1Nw9QWOkd0AVj4u5Aq1qnI53BWPDj0gq47WuUj4WYA6EfKT6Hu2rPw9uEE6nnWfaMsTvl2Hfz+n3rRw90NAUyTpprvT4+rZzTjGTavoZW7rBVh37j9/pW7whM6v4r9jNYhJmCIgwRzrpeBpFsnqx9AAP3p5L4nNHTFMTgkf41kjvIPgSN6lLK20bKoUAMYHWNyTqTpWw2HDa86S4pZC2m6mFHmdfpNRUdlnLRzFgKIllB5AkA+Qq16mMun5+f8AdL3XVILGFkTp1PIDnVuLSs50mzp8Dsq8lAnvYACPAU5jXQ2biO6orKRmZgqhh2kMn/kF+tczc4sxWEGVe+CfPl96x8e2dXLEs2UmTqdNYrnlKtnbCDtAFvqxEEfrRPaBYFhelrMf93dh9CtZOHw7seypM7cqe4tiQ9xiPhWET/BAFX7T50fTxTTbOn1Mk4qKM7XbrXh0ohE1RjFW9ujhao9YMz4xRQ0Urhn0J7zRVeaTiqMuglw1TNVS9UmkAOZ9KWu3IIExoST05faaq9yBSNx5LHrA9NT+d9YDOxTjOERcwYu5VRJDoB2ArQch3IkkRv4zk38cxkI1lAd8s5j0lnGY7nnWGGqQaZYYyVF4+pnHrQ3/AE7H5kP/AMlufQtNHsJkBZozHRRIMAgHNp41mzWtY4U5QE5Rm7QB37W30im9mMXaB7spdmZf+KetN4UQINVvYBweUeM0HEvrEkRSp8XZOSscd4qhvkb/AJ+TWc2Kais8mtKVkxg4o9PWgzJonuO+jYXBO7ALE/TxqUmikVJMTdY3qIJHhTeOwzI+Rt6CqCkRb6FmoZplo51UrTJiSQJTFTnogAqrCmYsbQ/wrFOh7DMBzG4PcVOh8xX1XiONXDYeyjIBcMM4U5RmI7YZdiJaPKuC9i8AGuG84/8AHYHvH7yP/WviWE/6mtHH8Qa85du+B0E7VT4wh9s6Yyk0rfQfiuKV3LIIWAFHQAaCsHHXNKeczyPpSGIwjudBA6kx/NTlJNJIzbpt9i+FP1rXwN3KymC0EEgdNj958qDheGqPiMnoNB+5+laaWhtsOm1PKa48Uc0cbUuTJxC53zINDEkmNduXgK18BxFbaKjZARMnPEySdBE86zEUA9KjGBGXK3kVMMD1U1L3JJV+C8ccW7a7O1wJR1zoZH1HcazfaEQEQcyW9NB9zXH8L9oBhG7QdydCoIRCNdT8WY7bR+lV4l7ctcYlLCKCCFLF3dZ5yWyg9wUDXzrthkjxTaOfLxi6Q+zktlUTGgApbH8KxDMq+6cL8RZlKJ0AzvCjmd+lXwFjit9AUui2jAEZWW2CDzy2xPqKFxL2YyDPi8aoPTtOx8JIJ9KrJOUaqhI3F8qG8Pw9FWbuIw6gbj3quTO0KmYt4CkrqIxz2WDoJDBQwgxr2WAIHl9K5C8wBIUkqCcp2JXYE9K3fZa6qJcdjHaUbzOkwO/UetefmjGtFseWTlTHcPcysG0MEGDMaa6wQfrSq8HdtUIjvlf3pm/JckrlnUCI08K6G+oFi0BzUsfNjvWw3xbvo7pRjKrRyFzhd0fIT/iQ303PpSWIQgaggjkQVPoda+g4FLcbAnmTr6dKBxzg3v1UI4UqZAOoJ8dx9R3U8c7apnNPEvBwVpIT1qFNaeM4dct6OhAHMaj1FZ2WryWk0Qqir1VTU3Ko2gqEuwFHalWP7+v4KZu2HCZypCzEkQJPTrShNKKywNWmqV4U6lQAiCSB1rTuO3OeUb7DSq8JwBfKQNWuKi8tgXbU6HRR4R307jrOR2SZymJ76WeR2Xxw5K2Z5JOmo8aKmAT5mIP086s2xPh+tCLVou9sWSV0CxGBGbU7fWrW8CCYLR3xVnfbu/IqbV0EHflVZRi42Sr5UOpwaNrgI6EUB81ttTB5Ec6gYloia9cxcwDXOo8nRVyUVoWxF4uxYme/woDNRL7Qxil2NBxp0MpWiS1QWqpaqE0UhZMnNUrVBVkNOTTPonBMbaw+AXYvdZmK/wCJyLPQdmfM1mvjpMnesNCcqAnQKCO7NLfrNEzCknkbZ1xjpGq+LqnviaQa6BQziW2G52A1JPQVPYWkbAxAXUmoOMB2mscqT8R8v3qco5aVRYpNEnlimaz4pgJBDDpzpU38+oaGHI/r08aHh8JcdSyQYMamDsD4c6BfzoYdYPKdPRhIPlUpRfkrGafTDYtA69GH5rWK+HdTBnQ6R08adbFg6D9/tVGZzuftTRlJEcsYN2+yMOWAJY5dD8JipgZty3Unw+tTc2oeGWSeoGlVlOVVYmJR8ofweUntOAPD+a1sMUUf+JC7cmMBRPMbAeVc4SRrR/6lyIzNHQGB58zUNnQn9GrduHOSXDHSY1APQVupiuxbDagIPqS0fWuQw1zkBoNz+b0VLzLOVyJ1jQj0OlVxpqLG9+MXtHXZlI0ND/qivOuaXGXP7gfER9q83EnG6A+Bj9K0oeUF58UjqRxDrBrI4yLJACIouMRqumUExJA0O/PqKyTxpRuj+UH9qVv8WUs7ISCcmWRzUgmRO37UseSYk5w4/FobThTs4QESQTJ2gc9N9SK6DAcKS0J0d+saDwrA4fxhyxZspaABAjsySducxWiOJNvJB8Mw+moozlKxcKjxt9kcc4bcugQ8AGYI3PWZ765i/wALvJuhI6jX+a6a/j2YagN0gx96TuX2CkQ488wikjJoaeOL2c2yEbgjxBH3qs07i8eWBUbc9vpSdsSRVU2ckqT0zS4LcyXrbfMrdmSQBm0Jnz+mtG45jR79wg7KkJPUooUn1U0vhyF1y6jbU6HmYB1+1exCq7FssE75SdT1gyJocWysciiqRFu5KieZNeZqlLQgCTp4UycBmBCtqBmJIgQRooAmWkH6Uy0hXK2ZrvRbB08aRD04jCPKnck1SFSadsOGpW42popeknelToMrYYvVCaDNSDShT1Rcmq16aisBs8KuDQxUzTkrH7N9oiJjTp5VfM39hqMFdAUDxrSt3B0FQk3Z0Rm67M3tnZfU/pW1wWy6NnZFPlDAdxND96vQT4U/hOIA9ltOnSlUmK5M0LmGt3tdJ7xDjxj+RWVf4I4+Ahh0Jg+o/imbrDcaEcxVE4lBh9R/cNx36fEPr41aOa9MDSYXBWyiZSDOpMdT+CjmT8p86Ir5hmV5B2O49RVGL8/vTPZgGJtMyMoABI/WdYrHxGDyAFmBY7AbabmTv+d9bWIuqil3Og5dTyA61zuJxRdi7adByVRsBSydIDp9lSZYDoJ8zoP1oF5By08NKPhmA7R56/tRHuodx6VFt2FCS3I0NNYLCvdMJoObEaD9zRMPZtTqGPiY+1bdi6oACgAdBpRsb3JVQkeDMBCup8QR+ppd+GXV17LeDfvFa74oDnVVxAOxplKiUrfZhB40PLerGKnijgtmHge/of09KSFyrRlaEYPEpB/OdJuk07f7SkelJK+vlBrABtZPjTOHxDr858N/qaqziqZx3UKQ0XJdD68QbmFPiKFdxDNPIHkNvCgK47q9nHUUOKGcpNbZOQdKIiAbChg1cNRFDCrKaBnHUetR74dRWMOWxWhh8QFERM7+kVmWXkUZHrNWMm10J8TwoVgyCFY7cgf2NCDVrMoYEHY1l37JQ93I0KoblfYG8/Kg1JqKBrIr1er1Yx6amarXqJi1er1eFMTDWXinrN2s1DTCGoyWx4s0s9eml0M0QGkGDJiWXnRLl0OJGh5jkf28aVc6UAvWoFjOHxboSUaD8wOoP+Q5+O9ON7QkD/1if89PSKxbjT40s98d9UjfgU0MTjHuNmc6DZRoo8B176Dcfl1+3P8AO+lBerwbXwrVsw77yvZqUD1YXKFGsbFw9aaTFELvqdu4VlG5RLb70KNY82KJo1vFGszNREehQbG77SG8D+9Z6vTJbSsy2+lUgJIeD0tiV1nrV0arXBK05o9icV6KtFeisV5FYqYq2Wpy1jWUipir5a9lo0BsoBU5aIFr0VqFtBMPcjSmg9JRRLT8qAtjqXKIxBGuo50qDVg9YzFMTYynuOx/Sl4rUkHQiQaTxFnKe47Ggwpi5FQavFVK0BiteqxWq0TH/9k=' />
                    
                    <Link to='/'><p className="legend"> BUY NOW ! </p></Link>
                </div>
        </Carousel>
        <br></br>

        <Carousel 
        showArrows={true} 
        emulateTouch={true}
        swipeable={true} 
        autoPlay={true} 
        interval={3000} 
        infiniteLoop={true} 
        stopOnHover={true}
        centerMode={true}
        width={800}>
          <div className='double'>
                <div>
                    <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                    
                </div>
                <div >
                    <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                    
                    
                </div>
                <div>
                    <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                    
                    
                </div>
          </div>
          <div className='double'>
                <div>
                    <img src="https://mobidictum.biz/wp-content/uploads/2022/05/FIFA-and-EA-end-partnership-800x400.jpg" />
                    
                </div>
                <div >
                    <img src="https://mobidictum.biz/wp-content/uploads/2022/05/FIFA-and-EA-end-partnership-800x400.jpg" />
                    
                    
                </div>
                <div>
                    <img src="https://mobidictum.biz/wp-content/uploads/2022/05/FIFA-and-EA-end-partnership-800x400.jpg " />
                    
                    
                </div>
          </div>
          <div className='double'>
                <div>
                    <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                    
                </div>
                <div >
                    <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                    
                    
                </div>
                <div>
                    <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                    
                    
                </div>
          </div>

        </Carousel>

    </div>
    )
}