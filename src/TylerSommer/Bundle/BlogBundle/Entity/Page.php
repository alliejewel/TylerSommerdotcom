<?php

namespace TylerSommer\Bundle\BlogBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Orkestra\Common\Type\NullDateTime;
use Orkestra\Common\Type\DateTime;
use Orkestra\Common\Entity\EntityBase;

/**
 * A page
 *
 * @ORM\Entity
 */
class Page extends AbstractPost
{

}
