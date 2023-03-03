import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router';

const EventsDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.someId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event found!</p>;
  }

  return (
    <div>
      <>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </>
    </div>
  );
};

export default EventsDetailPage;