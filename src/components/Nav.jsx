import Link from 'next/link';

const Navigation = () => {
    return ( <section>
    <nav className='flex justify-between m-10'>
    <img src="/img/ravn.svg" alt="ravn ikon" />
        <ul>
        <li><Link href="/">Home</Link></li>
            <li><Link href="/program">Program</Link></li>
            <li><Link href="/ticket">Tickets</Link></li>
            <li><Link href="/lineup">Lineup</Link></li></ul></nav></section> );
}
 
export default Navigation;