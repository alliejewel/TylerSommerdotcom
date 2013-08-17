<?php

namespace TylerSommer\Bundle\BlogBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use TylerSommer\Bundle\BlogBundle\Entity\Author;
use TylerSommer\Bundle\BlogBundle\Entity\Menu;

/**
 * Loads country and region data into the database
 */
class InitialBlogData extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * Load data fixtures with the passed EntityManager
     *
     * @param \Doctrine\Common\Persistence\ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        // Assumes first user is admin user
        $user = $manager->find('OrkestraApplicationBundle:User', 1);

        $author = new Author();
        $author->setUser($user);
        $manager->persist($author);

        $menu = new Menu();
        $menu->setName('main_nav');
        $menu->setType('simple_menu');
        $menu->setDefinition($this->getMainNavDefinition());
        $manager->persist($menu);

        $manager->flush();
    }

    /**
     * @return array
     */
    private function getMainNavDefinition()
    {
        return array(
            array(
                'label' => 'Home',
                'route' => 'home',
            ),
            array(
                'label' => 'About',
                'route' => 'about',
            ),
            array(
                'label' => 'Contact',
                'route' => 'contact',
            ),
            array(
                'label' => 'Manage',
                'route' => 'manage_posts',
                'role' => 'ROLE_ADMIN',
                'icon' => 'cog',
            ),
            array(
                'label' => 'Login',
                'route' => 'login',
                'not_role' => 'ROLE_USER',
                'icon' => 'user',
            ),
            array(
                'label' => 'Logout',
                'route' => 'logout',
                'role' => 'ROLE_USER',
                'icon' => 'signout',
            ),
        );
    }

    /**
     * Get the order of this fixture
     *
     * @return integer
     */
    public function getOrder()
    {
        return 10;
    }
}